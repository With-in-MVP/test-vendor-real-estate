var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateClientInfo } from "../../utils.mjs";
import { base64url } from "jose";
/**
 * Handles Auth0 client telemetry functionality. Can be used both as middleware
 * for automatic header injection and as a standalone utility for manual telemetry header generation.
 * @private
 */
export class Auth0ClientTelemetry {
    constructor(options) {
        this.clientInfo = options.clientInfo || generateClientInfo();
    }
    /**
     * Get the Auth0-Client header value for telemetry.
     * This method can be used when you need to manually add telemetry headers
     * instead of using the middleware system.
     */
    getAuth0ClientHeader() {
        if ("string" === typeof this.clientInfo.name && this.clientInfo.name.length > 0) {
            return base64url.encode(JSON.stringify(this.clientInfo));
        }
        return undefined;
    }
    pre(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const headerValue = this.getAuth0ClientHeader();
            if (headerValue) {
                context.init.headers = Object.assign(Object.assign({}, context.init.headers), { "Auth0-Client": headerValue });
            }
            return {
                url: context.url,
                init: context.init,
            };
        });
    }
}
