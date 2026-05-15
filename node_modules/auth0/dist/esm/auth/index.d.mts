import { IBackchannel } from "./backchannel.mjs";
import { AuthenticationClientOptions } from "./base-auth-api.mjs";
import { Database } from "./database.mjs";
import { OAuth } from "./oauth.mjs";
import { Passwordless } from "./passwordless.mjs";
import { ICustomTokenExchange } from "./tokenExchange.mjs";
export * from "./database.mjs";
export * from "./oauth.mjs";
export * from "./passwordless.mjs";
export { IDTokenValidateOptions, IdTokenValidatorError } from "./id-token-validator.mjs";
export { AuthApiError, AuthenticationClientOptions } from "./base-auth-api.mjs";
/**
 * Auth0 Authentication API Client
 *
 * Provides access to Auth0's authentication endpoints for login, signup,
 * passwordless authentication, and token exchange operations.
 *
 * @group Authentication API
 *
 * @example Basic setup
 * ```typescript
 * import { AuthenticationClient } from 'auth0';
 *
 * const auth0 = new AuthenticationClient({
 *   domain: 'your-tenant.auth0.com',
 *   clientId: 'your-client-id'
 * });
 * ```
 *
 * @example OAuth login
 * ```typescript
 * // Exchange authorization code for tokens
 * const tokenSet = await auth0.oauth.authorizationCodeGrant({
 *   code: 'auth-code',
 *   redirect_uri: 'https://app.example.com/callback'
 * });
 * ```
 *
 * @example Database operations
 * ```typescript
 * // Create user
 * const user = await auth0.database.signUp({
 *   connection: 'Username-Password-Authentication',
 *   username: 'john@example.com',
 *   password: 'secure-password123'
 * });
 * ```
 */
export declare class AuthenticationClient {
    /** Database connection operations (signup, change password) */
    database: Database;
    /** OAuth 2.0 and OIDC operations (authorization, token exchange) */
    oauth: OAuth;
    /** Passwordless authentication (email/SMS) */
    passwordless: Passwordless;
    /** Back-channel authentication (CIBA) */
    backchannel: IBackchannel;
    /** Custom token exchange operations */
    tokenExchange: ICustomTokenExchange;
    /**
     * Create a new Authentication API client
     * @param options - Configuration options for the client
     */
    constructor(options: AuthenticationClientOptions);
}
