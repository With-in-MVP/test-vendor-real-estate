import { McpServer } from '@modelcontextprotocol/server';
import { z } from 'zod';
import { getPropertyByName, searchProperties, getPriceSummary } from './db';

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

    return server;
}