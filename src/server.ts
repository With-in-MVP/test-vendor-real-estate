import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getPropertyByName, searchProperties, getPriceSummary } from './db.js';

export function createServer(): McpServer {
    const server = new McpServer({
        name: 'property-data',
        version: '1.0.0',
    })

    server.registerTool(
        'get_property',
        {
            description: 'Look up a single property by name. Returns full details including address, square_footage, and price',
            inputSchema: z.object({
                name: z.string().describe('The name of property to look up'),
            }),
        },
        async ({ name }) => {
            const property = await getPropertyByName(name);

            if (!property) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No property found matching "${name}"`
                        },
                    ],
                };
            }

            return {
                content: [
                    {
                        type: 'text',
                        text: `${property.name}
                            | Address: ${property.address}
                            | Square Footage: ${property.square_footage}
                            | Price: ${property.price}`
                    },
                ],
            };
        }
    )

    server.registerTool(
        'search_properties',
        {
            description: "search properties by name, address, minimum/maximum square footage, and minimum/maximum price",
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
            const results = await searchProperties({
                name, 
                address,
                square_footage_min,
                square_footage_max,
                price_min,
                price_max,
            });

            if (!results.length) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: 'No properties found'
                        },
                    ],
                };
            }

            return {
                content: [
                    {
                        type: 'text',
                        text: results.map(p =>
                            `${p.name}
                            | ${p.address}
                            | ${p.square_footage} sqft
                            | $${p.price}`
                        ).join('\n'),
                    },
                ],
            };
        }
    )

    server.registerTool(
        'get_price_summary',
        {
            description: 'return price summary of all properties',
            inputSchema: z.object({}),
        },
        async () => {
            const summary = await getPriceSummary();

            if (!summary) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: 'Failed to retrieve price summary'
                        },
                    ],
                };
            }

            return {
                content: [
                    {
                        type: 'text',
                        text: `Total Listings: ${summary.total_listings}
                        | Average Price $${summary.average_price}
                        | Most Expensive: ${summary.most_expensive.name} at $${summary.most_expensive.price}
                        | Least Expensive: ${summary.least_expensive.name} at $${summary.least_expensive.price}`
                    },
                ],
            };
        }
    )

    return server;
}