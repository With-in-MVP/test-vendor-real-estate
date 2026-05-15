"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.addClientAuthentication = void 0;
const jose = __importStar(require("jose"));
const uuid_1 = require("uuid");
/**
 * Adds client authentication, if available, to the provided payload.
 *
 * Adds `client_secret` for Client Secret Post token endpoint auth method (the SDK doesn't use Client Secret Basic)
 * Adds `client_assertion` and `client_assertion_type` for Private Key JWT token endpoint auth method.
 *
 * If `clientAssertionSigningKey` is provided it takes precedent over `clientSecret` .
 */
const addClientAuthentication = (_a) => __awaiter(void 0, [_a], void 0, function* ({ payload, domain, clientId, clientAssertionSigningKey, clientAssertionSigningAlg, clientSecret, useMTLS, }) {
    const cid = payload.client_id || clientId;
    if (clientAssertionSigningKey && !payload.client_assertion) {
        const alg = clientAssertionSigningAlg || "RS256";
        const privateKey = yield jose.importPKCS8(clientAssertionSigningKey, alg);
        payload.client_assertion = yield new jose.SignJWT({})
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setSubject(cid)
            .setJti((0, uuid_1.v4)())
            .setIssuer(cid)
            .setAudience(`https://${domain}/`)
            .setExpirationTime("2mins")
            .sign(privateKey);
        payload.client_assertion_type = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    }
    else if (clientSecret && !payload.client_secret) {
        payload.client_secret = clientSecret;
    }
    if ((!payload.client_secret || payload.client_secret.trim().length === 0) &&
        (!payload.client_assertion || payload.client_assertion.trim().length === 0) &&
        !useMTLS) {
        throw new Error("The client_secret or client_assertion field is required, or it should be mTLS request.");
    }
    return payload;
});
exports.addClientAuthentication = addClientAuthentication;
