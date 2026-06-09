import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getPropertyByName, searchProperties, getPriceSummary } from './db.js';
import { createEnforcement, type WithinClaims } from 'within-enforcement-sdk';

const within = createEnforcement({
  vendorId: process.env.VENDOR_ID ?? 'test-vendor-real-estate',
  apiUrl: process.env.WITHIN_API_URL ?? '',
  apiKey: process.env.WITHIN_API_KEY ?? '',
  vendorName: 'Real Estate MCP',
  upgradeUrl: 'https://example.com/pricing',
  toolScopeMap: {
    get_property: 'tools:run',
    search_properties: 'data:read',
    get_price_summary: 'data:read',
  },
});

export function createServer(claims: WithinClaims = {}): McpServer {
  const server = new McpServer({
    name: 'property-data',
    version: '1.0.0',
  });

  server.registerTool(
    'get_property',
    {
      description: 'Look up a single property by name. Returns full details including address, square_footage, and price',
      inputSchema: z.object({
        name: z.string().describe('The name of property to look up'),
      }),
    },
    async ({ name }) => {
      const decision = await within.authorize('get_property', claims);
      if (!decision.allowed) {
        return { content: [{ type: 'text', text: decision.message ?? `Access denied: ${decision.reason}` }] };
      }

      const start = Date.now();
      const property = await getPropertyByName(name);

      if (!property) {
        await within.complete('get_property', claims, 'success', { latencyMs: Date.now() - start });
        return { content: [{ type: 'text', text: `No property found matching "${name}"` }] };
      }

      await within.complete('get_property', claims, 'success', { latencyMs: Date.now() - start });
      const result = `${property.name} | Address: ${property.address} | Square Footage: ${property.square_footage} | Price: $${property.price}`;
      return {
        content: [
          { type: 'text', text: result },
          ...(decision.message ? [{ type: 'text' as const, text: `\n---\n${decision.message}` }] : []),
        ],
      };
    }
  );

  server.registerTool(
    'search_properties',
    {
      description: 'Search properties by name, address, minimum/maximum square footage, and minimum/maximum price',
      inputSchema: z.object({
        name: z.string().optional().describe('property name'),
        address: z.string().optional().describe('property address'),
        square_footage_min: z.number().optional().describe('minimum square footage'),
        square_footage_max: z.number().optional().describe('maximum square footage'),
        price_min: z.number().optional().describe('minimum price'),
        price_max: z.number().optional().describe('maximum price'),
      }),
    },
    async ({ name, address, square_footage_min, square_footage_max, price_min, price_max }) => {
      const decision = await within.authorize('search_properties', claims);
      if (!decision.allowed) {
        return { content: [{ type: 'text', text: decision.message ?? `Access denied: ${decision.reason}` }] };
      }

      const start = Date.now();
      const results = await searchProperties({
        name, address, square_footage_min, square_footage_max, price_min, price_max,
      });

      await within.complete('search_properties', claims, 'success', { latencyMs: Date.now() - start });

      if (!results.length) {
        return { content: [{ type: 'text', text: 'No properties found' }] };
      }

      const result = results.map(p =>
        `${p.name} | ${p.address} | ${p.square_footage} sqft | $${p.price}`
      ).join('\n');
      return {
        content: [
          { type: 'text', text: result },
          ...(decision.message ? [{ type: 'text' as const, text: `\n---\n${decision.message}` }] : []),
        ],
      };
    }
  );

  server.registerTool(
    'get_price_summary',
    {
      description: 'Return price summary of all properties',
      inputSchema: z.object({}),
    },
    async () => {
      const decision = await within.authorize('get_price_summary', claims);
      if (!decision.allowed) {
        return { content: [{ type: 'text', text: decision.message ?? `Access denied: ${decision.reason}` }] };
      }

      const start = Date.now();
      const summary = await getPriceSummary();

      if (!summary) {
        await within.complete('get_price_summary', claims, 'failure', { latencyMs: Date.now() - start });
        return { content: [{ type: 'text', text: 'Failed to retrieve price summary' }] };
      }

      await within.complete('get_price_summary', claims, 'success', { latencyMs: Date.now() - start });
      const result = `Total Listings: ${summary.total_listings} | Average Price: $${summary.average_price} | Most Expensive: ${summary.most_expensive.name} at $${summary.most_expensive.price} | Least Expensive: ${summary.least_expensive.name} at $${summary.least_expensive.price}`;
      return {
        content: [
          { type: 'text', text: result },
          ...(decision.message ? [{ type: 'text' as const, text: `\n---\n${decision.message}` }] : []),
        ],
      };
    }
  );

  return server;
}
