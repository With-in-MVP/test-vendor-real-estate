var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ResponseError } from "../lib/errors.mjs";
import { Auth0ClientTelemetry } from "../lib/middleware/auth0-client-telemetry.mjs";
import { JSONApiResponse } from "../lib/models.mjs";
import { BaseAPI } from "../lib/runtime.mjs";
export class UserInfoError extends Error {
    constructor(error, error_description, statusCode, body, headers) {
        super(error_description || error);
        this.error = error;
        this.error_description = error_description;
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
        this.name = "UserInfoError";
    }
}
export function parseError(response) {
    return __awaiter(this, void 0, void 0, function* () {
        // Errors typically have a specific format:
        // {
        //    error: 'invalid_body',
        //    error_description: 'Bad Request',
        // }
        const body = yield response.text();
        let data;
        try {
            data = JSON.parse(body);
            return new UserInfoError(data.error, data.error_description, response.status, body, response.headers);
        }
        catch (_a) {
            return new ResponseError(response.status, body, response.headers, "Response returned an error code");
        }
    });
}
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
export class UserInfoClient extends BaseAPI {
    /**
     * Create a new UserInfo API client
     * @param options - Configuration options including domain and client settings
     */
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { baseUrl: `https://${options.domain}`, middleware: options.telemetry !== false ? [new Auth0ClientTelemetry(options)] : [], parseError }));
    }
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
    getUserInfo(accessToken, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                path: `/userinfo`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }, initOverrides);
            return JSONApiResponse.fromResponse(response);
        });
    }
}
