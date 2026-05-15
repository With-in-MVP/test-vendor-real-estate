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
exports.TokenProvider = void 0;
const index_js_1 = require("../../auth/index.js");
const LEEWAY = 10 * 1000;
class TokenProvider {
    constructor(options) {
        this.options = options;
        this.expiresAt = 0;
        this.accessToken = "";
        this.authenticationClient = new index_js_1.AuthenticationClient(Object.assign(Object.assign({}, options), { headers: undefined }));
    }
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accessToken || Date.now() > this.expiresAt - LEEWAY) {
                this.pending =
                    this.pending ||
                        this.authenticationClient.oauth.clientCredentialsGrant({
                            audience: this.options.audience,
                        });
                const { data: { access_token: accessToken, expires_in: expiresIn }, } = yield this.pending.finally(() => {
                    delete this.pending;
                });
                this.expiresAt = Date.now() + expiresIn * 1000;
                this.accessToken = accessToken;
            }
            return this.accessToken;
        });
    }
}
exports.TokenProvider = TokenProvider;
