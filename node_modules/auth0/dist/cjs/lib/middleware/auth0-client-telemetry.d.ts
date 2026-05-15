import { Middleware, ClientOptions, FetchParams, RequestContext } from "../runtime.js";
/**
 * Handles Auth0 client telemetry functionality. Can be used both as middleware
 * for automatic header injection and as a standalone utility for manual telemetry header generation.
 * @private
 */
export declare class Auth0ClientTelemetry implements Middleware {
    clientInfo: {
        name: string;
        [key: string]: unknown;
    };
    constructor(options: ClientOptions);
    /**
     * Get the Auth0-Client header value for telemetry.
     * This method can be used when you need to manually add telemetry headers
     * instead of using the middleware system.
     */
    getAuth0ClientHeader(): string | undefined;
    pre?(context: RequestContext): Promise<FetchParams | void>;
}
