"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAuthAPI = exports.AuthApiError = void 0;
exports.grant = grant;
const errors_js_1 = require("../lib/errors.js");
const runtime_js_1 = require("../lib/runtime.js");
const client_authentication_js_1 = require("./client-authentication.js");
const auth0_client_telemetry_js_1 = require("../lib/middleware/auth0-client-telemetry.js");
class AuthApiError extends Error {
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
exports.AuthApiError = AuthApiError;
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
            return new errors_js_1.ResponseError(response.status, body, response.headers, "Response returned an error code");
        }
    });
}
class BaseAuthAPI extends runtime_js_1.BaseAPI {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { baseUrl: `https://${options.domain}`, middleware: options.telemetry !== false ? [new auth0_client_telemetry_js_1.Auth0ClientTelemetry(options)] : [], parseError, retry: Object.assign({ enabled: false }, options.retry) }));
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
            return (0, client_authentication_js_1.addClientAuthentication)({
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
exports.BaseAuthAPI = BaseAuthAPI;
/**
 * @private
 * Perform an OAuth 2.0 grant.
 */
function grant(grantType_1, bodyParameters_1) {
    return __awaiter(this, arguments, void 0, function* (grantType, bodyParameters, { idTokenValidateOptions, initOverrides } = {}, clientId, idTokenValidator, request) {
        const response = yield request({
            path: "/oauth/token",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(Object.assign(Object.assign({ client_id: clientId }, bodyParameters), { grant_type: grantType })),
        }, initOverrides);
        const res = yield runtime_js_1.JSONApiResponse.fromResponse(response);
        if (res.data.id_token) {
            yield idTokenValidator.validate(res.data.id_token, idTokenValidateOptions);
        }
        return res;
    });
}
