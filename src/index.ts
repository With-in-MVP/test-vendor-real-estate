import express , { Request, Response } from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { NodeStreamableHTTPServerTransport } from '@modelcontextprotocol/node';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { randomUUID } from 'node:crypto';
import { auth } from 'express-oauth2-jwt-bearer';
import { createServer } from './server.js';

const app = express(); // creates express application
app.use(express.json()); // tell express to automatically parse incoming request bodies as JSON
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4101; // read port from environment, otherwise fall back to 4101

// create auth0 middleware instance
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE!,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN!}/`,
});

// store transport instances in-memory (just for demo)
const transports: Record<string, NodeStreamableHTTPServerTransport> = {};

app.get('/.well-known/oauth-protected-resource', (req, res) => {
    res.json({
        resource: process.env.RESOURCE_URL!,
        authorization_servers: [`https://${process.env.AUTH0_DOMAIN!}`],
        scopes_supported: ['tools:read', 'tools:write'],
        bearer_methods_supported: ['header'],
    });
});

// checkJwt runs before handler (makes sure bearer token is valid)
app.post('/mcp', checkJwt, async (req, res) => {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: NodeStreamableHTTPServerTransport;

    // if client already sent a session ID and it exists in the store, reuse transport you created for them
    if (sessionId && transports[sessionId]) {
        transport = transports[sessionId];
    } else if (!sessionId && isInitializeRequest(req.body)) {

        // if sessionID doesn't exist (new client), create new transport with random UUID
        transport = new NodeStreamableHTTPServerTransport({
            sessionIdGenerator: () => randomUUID(),
        });

        // create new MCP server instance
        const server = createServer();

        // connect server to the transport
        await server.connect(transport);

        // store the transport in session map
        transports[transport.sessionId!] = transport;

        // delete transport if transport closes
        transport.onclose = () => {
            delete transports[transport.sessionId!];
        };
    } else {
        res.status(400).json({ error: 'Invalid request' });
        return;
    }

    await transport.handleRequest(req as any, res as any, req.body);
})