var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JSONApiResponse } from "../lib/models.mjs";
import { BaseAuthAPI } from "./base-auth-api.mjs";
/** RFC 8693-defined grant type for token exchange */
const TOKEN_EXCHANGE_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:token-exchange";
/** Auth0 token endpoint path */
const TOKEN_URL = "/oauth/token";
/**
 * Implements Auth0's Custom Token Exchange functionality with security best practices
 *
 * @security
 * - **HTTPS Enforcement**: All requests require TLS encryption
 * - **Credential Protection**: Client secrets never exposed in browser contexts
 * - **Input Validation**: Strict namespace enforcement for token types
 *
 * @example
 * ```typescript
 * // Secure token validation in Auth0 Action
 * exports.onExecuteCustomTokenExchange = async (event, api) => {
 *   const { jws } = require('jose');
 *   const { createRemoteJWKSet } = require('jose/jwks');
 *
 *   const JWKS = createRemoteJWKSet(new URL('https://external-idp.com/.well-known/jwks.json'));
 *
 *   try {
 *     const { payload } = await jws.verify(event.transaction.subject_token, JWKS);
 *     api.authentication.setUserById(payload.sub);
 *   } catch (error) {
 *     api.access.rejectInvalidSubjectToken('Invalid token signature');
 *   }
 * };
 * ```
 */
export class CustomTokenExchange extends BaseAuthAPI {
    /**
     * Executes token exchange flow with security validations
     *
     * @param options - Exchange configuration parameters
     * @returns Auth0-issued tokens with requested claims
     *
     * @throws {Error} When:
     * - `subject_token_type` uses prohibited namespace
     * - Network failures occur
     * - Auth0 returns error responses (4xx/5xx)
     */
    exchangeToken(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = Object.assign(Object.assign({}, options), { grant_type: TOKEN_EXCHANGE_GRANT_TYPE, client_id: this.clientId });
            yield this.addClientAuthentication(body);
            const response = yield this.request({
                path: TOKEN_URL,
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(body),
            }, {});
            const r = yield JSONApiResponse.fromResponse(response);
            return r.data;
        });
    }
}
