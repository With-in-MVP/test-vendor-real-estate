// =============================================================================
// TEST VENDOR: REAL ESTATE MCP SERVER
// A normal Auth0-protected MCP server. Within is NOT in the auth flow.
// Auth0 Actions stamp Within claims into the access token at login time.
// The enforcement SDK reads those claims to gate prospect access per tool call.
// =============================================================================

import express from 'express';
import { randomUUID } from 'node:crypto';
import { auth } from 'express-oauth2-jwt-bearer';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { createServer } from './server.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4101;
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!;

// --- Auth0 JWT middleware ---
const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: `https://${AUTH0_DOMAIN}/`,
});

// --- Session store ---
const transports: Record<string, StreamableHTTPServerTransport> = {};

// --- OAuth Protected Resource Metadata (RFC 9728) ---
app.get('/.well-known/oauth-protected-resource', (req, res) => {
  const proto = req.headers['x-forwarded-proto'] ?? 'http';
  const host = req.headers['host'] ?? 'localhost';
  res.json({
    resource: `${proto}://${host}/mcp`,
    authorization_servers: [`https://${AUTH0_DOMAIN}`],
    scopes_supported: ['openid', 'email'],
    bearer_methods_supported: ['header'],
  });
});

// --- OAuth Authorization Server Metadata (RFC 8414) ---
// Claude Desktop fetches this from the MCP server, not from Auth0 directly
app.get('/.well-known/oauth-authorization-server', (_req, res) => {
  res.json({
    issuer: `https://${AUTH0_DOMAIN}`,
    authorization_endpoint: `https://${AUTH0_DOMAIN}/authorize`,
    token_endpoint: `https://${AUTH0_DOMAIN}/oauth/token`,
    jwks_uri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
    response_types_supported: ['code'],
    code_challenge_methods_supported: ['S256'],
    grant_types_supported: ['authorization_code'],
  });
});

// --- MCP endpoint (POST: requests, GET: SSE, DELETE: close) ---
app.post('/mcp', checkJwt, async (req, res) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  let transport: StreamableHTTPServerTransport;

  if (sessionId && transports[sessionId]) {
    transport = transports[sessionId];
  } else if (!sessionId && isInitializeRequest(req.body)) {
    transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
    });

    // Pass the verified JWT claims to the MCP server for enforcement
    const claims = (req as any).auth?.payload ?? {};
    const server = createServer(claims);
    await server.connect(transport);

    transports[transport.sessionId!] = transport;
    transport.onclose = () => {
      delete transports[transport.sessionId!];
    };
  } else {
    res.status(400).json({ error: 'Invalid request — missing session or not an initialize request' });
    return;
  }

  await transport.handleRequest(req as any, res as any, req.body);
});

app.get('/mcp', checkJwt, async (req, res) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (!sessionId || !transports[sessionId]) {
    res.status(400).json({ error: 'Invalid session' });
    return;
  }
  await transports[sessionId].handleRequest(req as any, res as any);
});

app.delete('/mcp', checkJwt, async (req, res) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (sessionId && transports[sessionId]) {
    await transports[sessionId].close();
    delete transports[sessionId];
  }
  res.status(200).end();
});

// --- 401 handler: return WWW-Authenticate with PRM link ---
app.use((err: any, req: any, res: any, next: any) => {
  if (err.status === 401) {
    const proto = req.headers['x-forwarded-proto'] ?? 'http';
    const host = req.headers['host'] ?? 'localhost';
    res.set(
      'WWW-Authenticate',
      `Bearer resource_metadata="${proto}://${host}/.well-known/oauth-protected-resource"`
    );
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`Real Estate MCP Server running on port ${PORT}`);
});
