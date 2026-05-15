interface ClientOptionsWithFetcher {
    fetcher?: (args: any) => Promise<any>;
    [key: string]: any;
}
interface FetcherArgs {
    url: string;
    method: string;
    headers?: Record<string, string>;
    [key: string]: any;
}
export interface RequestOptions {
    /** The maximum time to wait for a response in seconds. */
    timeoutInSeconds?: number;
    /** The number of times to retry the request. Defaults to 2. */
    maxRetries?: number;
    /** A hook to abort the request. */
    abortSignal?: AbortSignal;
    /** Additional headers to include in the request. */
    headers?: Record<string, string | (() => string | Promise<string>) | undefined>;
}
/**
 * Helper functions that can be used directly in object literals for a more concise syntax.
 * These functions return partial request options that can be spread into request options objects.
 */
/**
 * Configure requests to use a custom domain header.
 * Can be used directly in object literals with spread syntax.
 * Note: This applies the header to all requests. For automatic path-based filtering,
 * use withCustomDomainHeader in ManagementClient constructor options.
 *
 * @param domain - The custom domain to use (e.g., 'auth.example.com')
 * @returns Partial request options with the custom domain header
 *
 * @example
 * ```typescript
 * const reqOptions = {
 *     ...CustomDomainHeader('auth.example.com'),
 *     timeoutInSeconds: 30
 * };
 * await client.actions.list({}, reqOptions);
 * ```
 */
export declare function CustomDomainHeader(domain: string): Partial<RequestOptions>;
/**
 * Configure requests with custom timeout settings.
 * Can be used directly in object literals with spread syntax.
 *
 * @param seconds - Timeout in seconds
 * @returns Partial request options with the specified timeout
 *
 * @example
 * ```typescript
 * const reqOptions = {
 *     ...withTimeout(30),
 *     maxRetries: 3
 * };
 * await client.actions.list({}, reqOptions);
 * ```
 */
export declare function withTimeout(seconds: number): Partial<RequestOptions>;
/**
 * Configure requests with custom retry settings.
 * Can be used directly in object literals with spread syntax.
 *
 * @param retries - Number of retry attempts (0 to disable retries)
 * @returns Partial request options with the specified retry count
 *
 * @example
 * ```typescript
 * const reqOptions = {
 *     ...withRetries(5),
 *     timeoutInSeconds: 30
 * };
 * await client.actions.list({}, reqOptions);
 * ```
 */
export declare function withRetries(retries: number): Partial<RequestOptions>;
/**
 * Configure requests with custom headers.
 * Can be used directly in object literals with spread syntax.
 *
 * @param headers - Object containing header key-value pairs
 * @returns Partial request options with the specified headers
 *
 * @example
 * ```typescript
 * const reqOptions = {
 *     ...withHeaders({
 *         'X-Request-ID': 'unique-id-123',
 *         'X-Custom-Header': 'custom-value'
 *     }),
 *     timeoutInSeconds: 30
 * };
 * await client.actions.list({}, reqOptions);
 * ```
 */
export declare function withHeaders(headers: Record<string, string>): Partial<RequestOptions>;
/**
 * Configure requests with an abort signal for cancellation.
 * Can be used directly in object literals with spread syntax.
 *
 * @param signal - AbortSignal to control request cancellation
 * @returns Partial request options with the specified abort signal
 *
 * @example
 * ```typescript
 * const controller = new AbortController();
 * const reqOptions = {
 *     ...withAbortSignal(controller.signal),
 *     timeoutInSeconds: 30
 * };
 * const promise = client.actions.list({}, reqOptions);
 * ```
 */
export declare function withAbortSignal(signal: AbortSignal): Partial<RequestOptions>;
/**
 * INTERNAL: Configure a client with custom domain header that will be applied to whitelisted requests only.
 * This creates a custom fetcher that intercepts requests and applies the whitelist logic.
 *
 * This function is for INTERNAL use only and is automatically used by ManagementClient
 * when the withCustomDomainHeader option is provided in the constructor.
 *
 * Users should use the ergonomic API: `new ManagementClient({ ..., withCustomDomainHeader: 'domain' })`
 *
 * @internal
 * @param domain - The custom domain to use (e.g., 'auth.example.com')
 * @param options - The ManagementClient or resource client configuration options
 * @returns Modified options with custom fetcher that implements whitelist logic and chains with existing fetcher if present
 */
export declare function withCustomDomainHeader<T extends ClientOptionsWithFetcher>(domain: string, options: T): T & {
    fetcher: (args: FetcherArgs) => Promise<any>;
};
export {};
