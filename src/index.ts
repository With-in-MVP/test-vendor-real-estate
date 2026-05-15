import express , { Request, Response } from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { randomUUID } from 'node:crypto';
import { auth } from 'express-oauth2-jwt-bearer';
import { createServer } from './server.js';

const app = express();
app.use(express.json());
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4101;

const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE!,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN!}/`,
});

app.get('./well-known/oauth-protected-resource', (req, res) => {
    res.json({
        resource: process.env.RESOURCE_URL!,
        authorization_servers: [`https://${process.env.AUTH0_DOMAIN!}`],
        scopes_supported: ['tools:read', 'tools:write'],
        bearer_methods_supported: ['header'],
    });
});