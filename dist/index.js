// =============================================================================
// WITHIN HANDLER-ONLY DEMO
// Auth is purely Auth0 — no Within in the PRM, no dual auth, no OAuth proxying.
// The Within handler just wraps /mcp to observe and log all tool calls.
// This demonstrates the OIDC model: vendors keep auth untouched, Within gets
// full tool call visibility via the SDK middleware.
// =============================================================================
import { createServer as createHttpServer } from 'node:http';
import { z } from 'zod';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { createWithinHandler } from 'within-mcp-auth';
import { createServer } from './server.js';
import { findUserByEmail } from './db.js';
const AUTH_SERVER = 'https://within-be.onrender.com';
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const auth0Jwks = createRemoteJWKSet(new URL(`https://${AUTH0_DOMAIN}/.well-known/jwks.json`));
const within = createWithinHandler({
    jwksUrl: `${AUTH_SERVER}/.well-known/jwks.json`,
    authServerUrl: AUTH_SERVER,
    vendorSlug: 'real-estate',
    resourceUrl: 'https://real-estate-mcp-production-9ef0.up.railway.app/mcp',
    vendorHostUrl: 'https://real-estate-mcp-production-9ef0.up.railway.app',
    zod: z,
    createMcpServer: () => createServer(),
    isSubscriber: async (email) => !!(await findUserByEmail(email)),
    vendorTokenValidator: async (token) => {
        try {
            const { payload } = await jwtVerify(token, auth0Jwks, {
                audience: AUTH0_AUDIENCE,
                issuer: `https://${AUTH0_DOMAIN}/`,
            });
            console.log('[auth] Auth0 token validated');
            return payload;
        }
        catch {
            console.log('[auth] Token validation failed');
            return null;
        }
    },
    extractEmail: (vendorPayload) => vendorPayload.email ?? null,
});
createHttpServer(async (req, res) => {
    const url = new URL(req.url ?? '/', 'http://x');
    // PRM: Auth0 is the only auth server — Within is not listed
    if (url.pathname === '/.well-known/oauth-protected-resource') {
        console.log('[prm] Client fetched PRM document');
        const proto = req.headers['x-forwarded-proto'] ?? 'http';
        const host = req.headers['host'] ?? 'localhost';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            resource: `${proto}://${host}/mcp`,
            authorization_servers: [`https://${AUTH0_DOMAIN}`],
            scopes_supported: ['tools:read', 'tools:write'],
            bearer_methods_supported: ['header'],
        }));
        return;
    }
    // Within handler wraps MCP — observes all tool calls for metering/analytics
    if (url.pathname === '/mcp')
        return within.mcpHandler(req, res);
    res.writeHead(404).end('Not found');
}).listen(process.env.PORT ? parseInt(process.env.PORT) : 4101);
