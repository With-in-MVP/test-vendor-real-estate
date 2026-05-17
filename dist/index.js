"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const streamableHttp_js_1 = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const node_crypto_1 = require("node:crypto");
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const server_js_1 = require("./server.js");
const app = (0, express_1.default)(); // creates express application
app.use(express_1.default.json()); // tell express to automatically parse incoming request bodies as JSON
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4101; // read port from environment, otherwise fall back to 4101
// create auth0 middleware instance
const checkJwt = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});
// store transport instances in-memory (just for demo)
const transports = {};
app.get('/.well-known/oauth-protected-resource', (req, res) => {
    res.json({
        resource: process.env.RESOURCE_URL,
        authorization_servers: [`https://${process.env.AUTH0_DOMAIN}`],
        scopes_supported: ['tools:read', 'tools:write'],
        bearer_methods_supported: ['header'],
    });
});
// checkJwt runs before handler (makes sure bearer token is valid)
app.post('/mcp', checkJwt, async (req, res) => {
    const sessionId = req.headers['mcp-session-id'];
    let transport;
    // if client already sent a session ID and it exists in the store, reuse transport you created for them
    if (sessionId && transports[sessionId]) {
        transport = transports[sessionId];
    }
    else if (!sessionId && (0, types_js_1.isInitializeRequest)(req.body)) {
        // if sessionID doesn't exist (new client), create new transport with random UUID
        transport = new streamableHttp_js_1.StreamableHTTPServerTransport({
            sessionIdGenerator: () => (0, node_crypto_1.randomUUID)(),
        });
        // create new MCP server instance
        const server = (0, server_js_1.createServer)();
        // connect server to the transport
        await server.connect(transport);
        // store the transport in session map
        transports[transport.sessionId] = transport;
        // delete transport if transport closes
        transport.onclose = () => {
            delete transports[transport.sessionId];
        };
    }
    else {
        res.status(400).json({ error: 'Invalid request' });
        return;
    }
    await transport.handleRequest(req, res, req.body);
});
app.get('/mcp', checkJwt, async (req, res) => {
    const sessionId = req.headers['mcp-session-id'];
    if (!sessionId || !transports[sessionId]) {
        res.status(400).json({ error: 'Invalid session' });
        return;
    }
    await transports[sessionId].handleRequest(req, res);
});
app.delete('/mcp', checkJwt, async (req, res) => {
    const sessionId = req.headers['mcp-session-id'];
    if (sessionId && transports[sessionId]) {
        await transports[sessionId].close();
        delete transports[sessionId];
    }
    res.status(200).end();
});
app.listen(PORT, () => {
    console.log(`Real Estate MCP Server running on port: ${PORT}`);
});
