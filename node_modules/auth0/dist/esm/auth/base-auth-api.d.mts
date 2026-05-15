import { BaseAPI, ClientOptions, InitOverrideFunction, JSONApiResponse, RequestOpts } from "../lib/runtime.mjs";
import { AddClientAuthenticationPayload } from "./client-authentication.mjs";
import { IDTokenValidator } from "./id-token-validator.mjs";
import { GrantOptions, TokenSet } from "./oauth.mjs";
export interface AuthenticationClientOptions extends ClientOptions {
    domain: string;
    clientId: string;
    clientSecret?: string;
    clientAssertionSigningKey?: string;
    clientAssertionSigningAlg?: string;
    idTokenSigningAlg?: string;
    clockTolerance?: number;
    useMTLS?: boolean;
}
export declare class AuthApiError extends Error {
    error: string;
    error_description: string;
    statusCode: number;
    body: string;
    headers: Headers;
    name: "AuthApiError";
    constructor(error: string, error_description: string, statusCode: number, body: string, headers: Headers);
}
export declare class BaseAuthAPI extends BaseAPI {
    domain: string;
    clientId: string;
    clientSecret?: string;
    clientAssertionSigningKey?: string;
    clientAssertionSigningAlg?: string;
    useMTLS?: boolean;
    constructor(options: AuthenticationClientOptions);
    /**
     * @private
     */
    protected addClientAuthentication(payload: AddClientAuthenticationPayload): Promise<AddClientAuthenticationPayload>;
}
/**
 * @private
 * Perform an OAuth 2.0 grant.
 */
export declare function grant(grantType: string, bodyParameters: Record<string, any>, { idTokenValidateOptions, initOverrides }: GrantOptions | undefined, clientId: string, idTokenValidator: IDTokenValidator, request: (context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction) => Promise<Response>): Promise<JSONApiResponse<TokenSet>>;
