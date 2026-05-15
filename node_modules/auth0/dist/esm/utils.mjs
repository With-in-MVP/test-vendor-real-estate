var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SDK_VERSION as version } from "./management/version.mjs";
import { RUNTIME } from "./management/core/index.mjs";
export const generateClientInfo = () => {
    var _a, _b;
    const runtimeType = (_a = RUNTIME === null || RUNTIME === void 0 ? void 0 : RUNTIME.type) !== null && _a !== void 0 ? _a : "unknown";
    const runtimeKey = runtimeType === "workerd" ? "cloudflare-workers" : runtimeType;
    const runtimeVersion = (_b = RUNTIME === null || RUNTIME === void 0 ? void 0 : RUNTIME.version) !== null && _b !== void 0 ? _b : "unknown";
    return {
        name: "node-auth0",
        version,
        env: {
            [runtimeKey]: runtimeVersion,
        },
    };
};
/**
 * @private
 */
export const mtlsPrefix = "mtls";
/**
 * Resolves a value that can be a static value, a synchronous function, or an asynchronous function.
 *
 * @template T - The type of the value to be resolved.
 * @param {T | SyncGetter<T> | AsyncGetter<T>} value - The value to be resolved. It can be:
 *   - A static value of type T.
 *   - A synchronous function that returns a value of type T.
 *   - An asynchronous function that returns a Promise of type T.
 * @returns {Promise<T>} A promise that resolves to the value of type T.
 */
export const resolveValueToPromise = (value) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof value === "function") {
        const result = value(); // Call the function
        return result instanceof Promise ? result : Promise.resolve(result); // Handle sync/async
    }
    return Promise.resolve(value); // Static value
});
