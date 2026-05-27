// =============================================================================
// ORIGINAL AUTH0-ONLY IMPLEMENTATION (commented out for reference)
// This is everything a vendor needs to manually handle: Express setup, JWT
// middleware, session management, transport lifecycle, PRM endpoint, and
// 401 error formatting. The Within SDK replaces all of this.
// =============================================================================

// import express from 'express';
// import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
// import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
// import { randomUUID } from 'node:crypto';
// import { auth } from 'express-oauth2-jwt-bearer';
// import { createServer } from './server.js';
//
// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4101;
//
// const checkJwt = auth({
//     audience: process.env.AUTH0_AUDIENCE!,
//     issuerBaseURL: `https://${process.env.AUTH0_DOMAIN!}/`,
// });
//
// const transports: Record<string, StreamableHTTPServerTransport> = {};
//
// app.get('/.well-known/oauth-protected-resource', (req, res) => {
//     res.json({
//         resource: process.env.RESOURCE_URL!,
//         authorization_servers: [`https://${process.env.AUTH0_DOMAIN!}`],
//         scopes_supported: ['tools:read', 'tools:write'],
//         bearer_methods_supported: ['header'],
//     });
// });
//
// app.post('/mcp', checkJwt, async (req, res) => {
//     const sessionId = req.headers['mcp-session-id'] as string | undefined;
//     let transport: StreamableHTTPServerTransport;
//
//     if (sessionId && transports[sessionId]) {
//         transport = transports[sessionId];
//     } else if (!sessionId && isInitializeRequest(req.body)) {
//         transport = new StreamableHTTPServerTransport({
//             sessionIdGenerator: () => randomUUID(),
//         });
//         const server = createServer();
//         await server.connect(transport);
//         transports[transport.sessionId!] = transport;
//         transport.onclose = () => {
//             delete transports[transport.sessionId!];
//         };
//     } else {
//         res.status(400).json({ error: 'Invalid request' });
//         return;
//     }
//
//     await transport.handleRequest(req as any, res as any, req.body);
// })
//
// app.get('/mcp', checkJwt, async (req, res) => {
//     const sessionId = req.headers['mcp-session-id'] as string | undefined;
//     if (!sessionId || !transports[sessionId]) {
//         res.status(400).json({ error: 'Invalid session' });
//         return;
//     }
//     await transports[sessionId].handleRequest(req as any, res as any);
// });
//
// app.delete('/mcp', checkJwt, async (req, res) => {
//     const sessionId = req.headers['mcp-session-id'] as string | undefined;
//     if (sessionId && transports[sessionId]) {
//         await transports[sessionId].close();
//         delete transports[sessionId];
//     }
//     res.status(200).end();
// })
//
// app.use((err: any, req: any, res: any, next: any) => {
//     if (err.status === 401) {
//         const resourceUrl = process.env.RESOURCE_URL!.replace('/mcp', '');
//         res.set(
//             'WWW-Authenticate',
//             `Bearer resource_metadata="${resourceUrl}/.well-known/oauth-protected-resource"`
//         );
//         res.status(401).json({ error: 'unauthorized' });
//         return;
//     }
//     next(err);
// });
//
// app.listen(PORT, () => {
//     console.log(`Real Estate MCP Server running on port: ${PORT}`);
// })

// =============================================================================
// WITHIN SDK INTEGRATION (replaces everything above)
// Matches the known-working reference implementation exactly.
// Auth0 vendorTokenValidator commented out for now — add back once base works.
// =============================================================================

import { createServer as createHttpServer } from 'node:http';
import { z } from 'zod';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { createWithinHandler } from 'within-mcp-auth';
import { createServer } from './server.js';
import { findUserByEmail } from './db.js';

const AUTH_SERVER = 'https://within-be.onrender.com';
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!;

const auth0Jwks = createRemoteJWKSet(
    new URL(`https://${AUTH0_DOMAIN}/.well-known/jwks.json`)
);

const within = createWithinHandler({
    jwksUrl: `${AUTH_SERVER}/.well-known/jwks.json`,
    authServerUrl: AUTH_SERVER,
    vendorSlug: 'real-estate',
    resourceUrl: 'https://real-estate-mcp-production-9ef0.up.railway.app/mcp',
    vendorHostUrl: 'https://real-estate-mcp-production-9ef0.up.railway.app',
    zod: z,
    createMcpServer: () => createServer(),

    // Recognize your paying customers when they arrive via With.in tokens.
    // Without this, paying users hit trial walls — see "The isSubscriber hook" below.
    isSubscriber: async (email) => !!(await findUserByEmail(email)),

    vendorTokenValidator: async (token: string) => {
        try {
            const { payload } = await jwtVerify(token, auth0Jwks, {
                audience: AUTH0_AUDIENCE,
                issuer: `https://${AUTH0_DOMAIN}/`,
            });
            console.log('[auth] Auth0 token validated');
            return payload as Record<string, unknown>;
        } catch {
            console.log('[auth] Not an Auth0 token, falling through to With.in');
            return null;
        }
    },

    extractEmail: (vendorPayload: Record<string, unknown>) =>
        (vendorPayload.email as string) ?? null,

    // log: (line: string) => console.log(line),
});

createHttpServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://x');

    // if (url.pathname === '/.well-known/oauth-protected-resource') return within.prmHandler(req, res);
    if (url.pathname === '/.well-known/oauth-protected-resource') {
        console.log('[prm] Client fetched PRM document');
        const proto = req.headers['x-forwarded-proto'] ?? 'http';
        const host = req.headers['host'] ?? 'localhost';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            resource: `${proto}://${host}/mcp`,
            authorization_servers: [
                `https://${AUTH0_DOMAIN}`,
                AUTH_SERVER,
            ],
            scopes_supported: ['tools:read', 'tools:write'],
            bearer_methods_supported: ['header'],
        }));
        return;
    }
    if (url.pathname === '/.well-known/oauth-authorization-server') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            issuer: `https://${process.env.AUTH0_DOMAIN!}`,
            authorization_endpoint: `https://${process.env.AUTH0_DOMAIN!}/authorize`,
            token_endpoint: `https://${process.env.AUTH0_DOMAIN!}/oauth/token`,
            jwks_uri: `https://${process.env.AUTH0_DOMAIN!}/.well-known/jwks.json`,
        }));
        return;
    }

    if (url.pathname === '/oauth/authorize') {
        const redirectUri = url.searchParams.get('redirect_uri');
        const state = url.searchParams.get('state');
    
        const auth0Url = new URL(`https://${process.env.AUTH0_DOMAIN!}/authorize`);
        auth0Url.searchParams.set('response_type', 'code');
        auth0Url.searchParams.set('client_id', process.env.AUTH0_CLIENT_ID!);
        auth0Url.searchParams.set('redirect_uri', `${process.env.VENDOR_HOST_URL!}/oauth/callback`);
        auth0Url.searchParams.set('state', `${state}|${encodeURIComponent(redirectUri!)}`);
        auth0Url.searchParams.set('scope', 'openid email');
    
        res.writeHead(302, { Location: auth0Url.toString() });
        res.end();
        return;
    }

    if (url.pathname === '/oauth/callback') {
        console.log('[oauth/callback] raw url:', req.url);
        const code = url.searchParams.get('code');
        console.log('[oauth/callback] code:', code);
        const rawState = url.searchParams.get('state') ?? '';
        const [state, encodedRedirectUri] = rawState.split('|');
        const withinRedirectUri = decodeURIComponent(encodedRedirectUri);
    
        const tokenRes = await fetch(`https://${process.env.AUTH0_DOMAIN!}/oauth/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grant_type: 'authorization_code',
                client_id: process.env.AUTH0_CLIENT_ID!,
                client_secret: process.env.AUTH0_CLIENT_SECRET!,
                code,
                redirect_uri: `${process.env.VENDOR_HOST_URL!}/oauth/callback`,
            }),
        });
    
        const tokens = await tokenRes.json() as any;
        console.log('[oauth/callback] token response keys:', Object.keys(tokens));
        console.log('[oauth/callback] token error:', tokens.error, tokens.error_description);
        console.log('[oauth/callback] withinRedirectUri:', withinRedirectUri);
    
        if (tokens.error) {
            res.writeHead(500).end(`Auth0 error: ${tokens.error} - ${tokens.error_description}`);
            return;
        }
    
        const idTokenPayload = JSON.parse(
            Buffer.from(tokens.id_token.split('.')[1], 'base64').toString()
        );
        console.log('[oauth/callback] id token payload:', JSON.stringify(idTokenPayload));
        const email = idTokenPayload.email;
        console.log('[oauth/callback] email:', email);
    
        const callbackUrl = new URL(withinRedirectUri);
        callbackUrl.searchParams.set('state', state);
        callbackUrl.searchParams.set('vendor_email', email);
    
        res.writeHead(302, { Location: callbackUrl.toString() });
        res.end();
        return;
    }

    if (url.pathname === '/subscribe')                            return within.subscribeHandler(req, res);
    if (url.pathname === '/mcp')                                  return within.mcpHandler(req, res);

    res.writeHead(404).end('Not found');
}).listen(process.env.PORT ? parseInt(process.env.PORT) : 4101);