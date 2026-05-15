var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as jose from "jose";
import { v4 as uuid } from "uuid";
/**
 * Adds client authentication, if available, to the provided payload.
 *
 * Adds `client_secret` for Client Secret Post token endpoint auth method (the SDK doesn't use Client Secret Basic)
 * Adds `client_assertion` and `client_assertion_type` for Private Key JWT token endpoint auth method.
 *
 * If `clientAssertionSigningKey` is provided it takes precedent over `clientSecret` .
 */
export const addClientAuthentication = (_a) => __awaiter(void 0, [_a], void 0, function* ({ payload, domain, clientId, clientAssertionSigningKey, clientAssertionSigningAlg, clientSecret, useMTLS, }) {
    const cid = payload.client_id || clientId;
    if (clientAssertionSigningKey && !payload.client_assertion) {
        const alg = clientAssertionSigningAlg || "RS256";
        const privateKey = yield jose.importPKCS8(clientAssertionSigningKey, alg);
        payload.client_assertion = yield new jose.SignJWT({})
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setSubject(cid)
            .setJti(uuid())
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
