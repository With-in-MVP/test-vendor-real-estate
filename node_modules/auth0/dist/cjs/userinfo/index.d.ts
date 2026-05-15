import { ResponseError } from "../lib/errors.js";
import { ClientOptions, InitOverride, JSONApiResponse } from "../lib/models.js";
import { BaseAPI } from "../lib/runtime.js";
/**
 * Response interface for the UserInfo endpoint
 * @group UserInfo API
 */
export interface UserInfoResponse {
    sub: string;
    name: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    nickname: string;
    preferred_username?: string;
    profile?: string;
    picture?: string;
    website?: string;
    email: string;
    email_verified: boolean;
    gender?: string;
    birthdate?: string;
    zoneinfo?: string;
    locale?: string;
    phone_number?: string;
    phone_number_verified?: string;
    address?: {
        country?: string;
    };
    updated_at: string;
    [key: string]: unknown;
}
export declare class UserInfoError extends Error {
    error: string;
    error_description: string;
    statusCode: number;
    body: string;
    headers: Headers;
    name: "UserInfoError";
    constructor(error: string, error_description: string, statusCode: number, body: string, headers: Headers);
}
export declare function parseError(response: Response): Promise<ResponseError | UserInfoError>;
/**
 * Auth0 UserInfo API Client
 *
 * Provides access to the UserInfo endpoint to retrieve user profile information
 * using an access token obtained during authentication.
 *
 * @group UserInfo API
 *
 * @example Basic usage
 * ```typescript
 * import { UserInfoClient } from 'auth0';
 *
 * const userInfoClient = new UserInfoClient({
 *   domain: 'your-tenant.auth0.com'
 * });
 *
 * const userInfo = await userInfoClient.getUserInfo(accessToken);
 * console.log(userInfo.data.sub, userInfo.data.email);
 * ```
 */
export declare class UserInfoClient extends BaseAPI {
    /**
     * Create a new UserInfo API client
     * @param options - Configuration options including domain and client settings
     */
    constructor(options: {
        domain: string;
    } & ClientOptions);
    /**
   * Given an access token get the user profile linked to it.
   *
   * @example <caption>
   *   Get the user information based on the Auth0 access token (obtained during
   *   login). Find more information in the
   *   <a href="https://auth0.com/docs/auth-api#!#get--userinfo">API Docs</a>.
   * </caption>
   *
   * const userInfoClient = new UserInfoClient({
   *   domain: '...'
   * });

   * const userInfo = await userInfoClient.getUserInfo(accessToken);
   */
    getUserInfo(accessToken: string, initOverrides?: InitOverride): Promise<JSONApiResponse<UserInfoResponse>>;
}
