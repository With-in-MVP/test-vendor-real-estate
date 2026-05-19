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
// The SDK handles auth, sessions, transport, quota, usage reporting, and
// network discovery. The vendor provides a server factory, an isSubscriber
// hook, and optionally a vendorTokenValidator for accepting vendor-native
// tokens (e.g. Auth0) alongside With.in tokens.
// =============================================================================
import { createServer as createHttpServer } from 'node:http';
import { z } from 'zod';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { createWithinHandler } from 'within-mcp-auth';
import { createServer } from './server.js';
import { findUserByEmail } from './db.js';
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4101;
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH_SERVER = 'https://within-be.onrender.com';
// Auth0 JWKS for vendor token validation
const auth0Jwks = createRemoteJWKSet(new URL(`https://${AUTH0_DOMAIN}/.well-known/jwks.json`));
const within = createWithinHandler({
    jwksUrl: `${AUTH_SERVER}/.well-known/jwks.json`,
    authServerUrl: AUTH_SERVER,
    vendorSlug: 'real-estate',
    resourceUrl: process.env.RESOURCE_URL,
    vendorHostUrl: process.env.RESOURCE_URL.replace('/mcp', ''),
    zod: z,
    createMcpServer: () => createServer(),
    // Recognize paying customers arriving via With.in tokens.
    // Without this, paying users hit trial walls.
    isSubscriber: async (email) => !!(await findUserByEmail(email)),
    // Dual auth: validate Auth0 tokens as the vendor auth path.
    // Returns non-null -> user is treated as a subscriber, With.in JWKS skipped.
    // Returns null -> token wasn't Auth0, SDK falls through to With.in validation.
    vendorTokenValidator: async (token) => {
        try {
            const { payload } = await jwtVerify(token, auth0Jwks, {
                audience: AUTH0_AUDIENCE,
                issuer: `https://${AUTH0_DOMAIN}/`,
            });
            return payload;
        }
        catch {
            return null;
        }
    },
    // Extract email from Auth0 tokens so With.in can track conversions
    extractEmail: (vendorPayload) => vendorPayload.email ?? null,
    log: (line) => console.log(line),
});
createHttpServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://x');
    if (url.pathname === '/.well-known/oauth-protected-resource')
        return within.prmHandler(req, res);
    if (url.pathname === '/subscribe')
        return within.subscribeHandler(req, res);
    if (url.pathname === '/mcp')
        return within.mcpHandler(req, res);
    res.writeHead(404).end('Not found');
}).listen(PORT, () => {
    console.log(`Real Estate MCP Server running on port: ${PORT}`);
});
