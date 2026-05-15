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
exports.resolveValueToPromise = exports.mtlsPrefix = exports.generateClientInfo = void 0;
const version_js_1 = require("./management/version.js");
const index_js_1 = require("./management/core/index.js");
const generateClientInfo = () => {
    var _a, _b;
    const runtimeType = (_a = index_js_1.RUNTIME === null || index_js_1.RUNTIME === void 0 ? void 0 : index_js_1.RUNTIME.type) !== null && _a !== void 0 ? _a : "unknown";
    const runtimeKey = runtimeType === "workerd" ? "cloudflare-workers" : runtimeType;
    const runtimeVersion = (_b = index_js_1.RUNTIME === null || index_js_1.RUNTIME === void 0 ? void 0 : index_js_1.RUNTIME.version) !== null && _b !== void 0 ? _b : "unknown";
    return {
        name: "node-auth0",
        version: version_js_1.SDK_VERSION,
        env: {
            [runtimeKey]: runtimeVersion,
        },
    };
};
exports.generateClientInfo = generateClientInfo;
/**
 * @private
 */
exports.mtlsPrefix = "mtls";
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
const resolveValueToPromise = (value) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof value === "function") {
        const result = value(); // Call the function
        return result instanceof Promise ? result : Promise.resolve(result); // Handle sync/async
    }
    return Promise.resolve(value); // Static value
});
exports.resolveValueToPromise = resolveValueToPromise;
