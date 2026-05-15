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
import { BaseAPI, JSONApiResponse } from "../lib/runtime.mjs";
import { addClientAuthentication } from "./client-authentication.mjs";
import { Auth0ClientTelemetry } from "../lib/middleware/auth0-client-telemetry.mjs";
export class AuthApiError extends Error {
    constructor(error, error_description, statusCode, body, headers) {
        super(error_description || error);
        this.error = error;
        this.error_description = error_description;
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
        this.name = "AuthApiError";
    }
}
function parseErrorBody(body) {
    const rawData = JSON.parse(body);
    let data;
    if (rawData.error) {
        data = rawData;
    }
    else {
        data = {
            error: rawData.code,
            error_description: rawData.description,
        };
    }
    return data;
}
function parseError(response) {
    return __awaiter(this, void 0, void 0, function* () {
        // Errors typically have a specific format:
        // {
        //    error: 'invalid_body',
        //    error_description: 'Bad Request',
        // }
        const body = yield response.text();
        try {
            const data = parseErrorBody(body);
            return new AuthApiError(data.error, data.error_description, response.status, body, response.headers);
        }
        catch (_a) {
            return new ResponseError(response.status, body, response.headers, "Response returned an error code");
        }
    });
}
export class BaseAuthAPI extends BaseAPI {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { baseUrl: `https://${options.domain}`, middleware: options.telemetry !== false ? [new Auth0ClientTelemetry(options)] : [], parseError, retry: Object.assign({ enabled: false }, options.retry) }));
        this.domain = options.domain;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.clientAssertionSigningKey = options.clientAssertionSigningKey;
        this.clientAssertionSigningAlg = options.clientAssertionSigningAlg;
        this.useMTLS = options.useMTLS;
    }
    /**
     * @private
     */
    addClientAuthentication(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return addClientAuthentication({
                payload,
                domain: this.domain,
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                clientAssertionSigningKey: this.clientAssertionSigningKey,
                clientAssertionSigningAlg: this.clientAssertionSigningAlg,
                useMTLS: this.useMTLS,
            });
        });
    }
}
/**
 * @private
 * Perform an OAuth 2.0 grant.
 */
export function grant(grantType_1, bodyParameters_1) {
    return __awaiter(this, arguments, void 0, function* (grantType, bodyParameters, { idTokenValidateOptions, initOverrides } = {}, clientId, idTokenValidator, request) {
        const response = yield request({
            path: "/oauth/token",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(Object.assign(Object.assign({ client_id: clientId }, bodyParameters), { grant_type: grantType })),
        }, initOverrides);
        const res = yield JSONApiResponse.fromResponse(response);
        if (res.data.id_token) {
            yield idTokenValidator.validate(res.data.id_token, idTokenValidateOptions);
        }
        return res;
    });
}
