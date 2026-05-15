var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { retry } from "./retry.mjs";
import { FetchError, RequiredError, TimeoutError } from "./errors.mjs";
export * from "./models.mjs";
/**
 * @private
 * This is the base class for all generated API classes.
 */
export class BaseAPI {
    constructor(configuration) {
        this.configuration = configuration;
        this.fetchWithTimeout = (url, init) => __awaiter(this, void 0, void 0, function* () {
            const controller = new AbortController();
            const timeout = setTimeout(() => {
                controller.abort();
            }, this.timeoutDuration);
            try {
                return yield this.fetchApi(url, Object.assign({ signal: controller.signal }, init));
            }
            catch (e) {
                if (e.name === "AbortError") {
                    throw new TimeoutError();
                }
                throw e;
            }
            finally {
                clearTimeout(timeout);
            }
        });
        this.fetch = (url, init) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let fetchParams = { url, init };
            for (const middleware of this.middleware) {
                if (middleware.pre) {
                    fetchParams =
                        (yield middleware.pre(Object.assign({ fetch: this.fetchWithTimeout }, fetchParams))) || fetchParams;
                }
            }
            let response = undefined;
            let error = undefined;
            try {
                response =
                    ((_a = this.configuration.retry) === null || _a === void 0 ? void 0 : _a.enabled) !== false
                        ? yield retry(() => this.fetchWithTimeout(fetchParams.url, fetchParams.init), Object.assign({}, this.configuration.retry))
                        : yield this.fetchWithTimeout(fetchParams.url, fetchParams.init);
            }
            catch (e) {
                error = e;
            }
            if (error || !response.ok) {
                for (const middleware of this.middleware) {
                    if (middleware.onError) {
                        response =
                            (yield middleware.onError(Object.assign(Object.assign({ fetch: this.fetchWithTimeout }, fetchParams), { error, response: response ? response.clone() : undefined }))) || response;
                    }
                }
                if (response === undefined) {
                    throw new FetchError(error, "The request failed and the interceptors did not return an alternative response");
                }
            }
            else {
                for (const middleware of this.middleware) {
                    if (middleware.post) {
                        response =
                            (yield middleware.post(Object.assign(Object.assign({ fetch: this.fetchApi }, fetchParams), { response: response.clone() }))) || response;
                    }
                }
            }
            return response;
        });
        if (configuration.baseUrl === null || configuration.baseUrl === undefined) {
            throw new Error("Must provide a base URL for the API");
        }
        if ("string" !== typeof configuration.baseUrl || configuration.baseUrl.length === 0) {
            throw new Error("The provided base URL is invalid");
        }
        this.middleware = configuration.middleware || [];
        this.fetchApi = configuration.fetch || globalThis.fetch.bind(globalThis);
        this.parseError = configuration.parseError;
        this.timeoutDuration =
            typeof configuration.timeoutDuration === "number" ? configuration.timeoutDuration : 10000;
    }
    request(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, init } = yield this.createFetchParams(context, initOverrides);
            const response = yield this.fetch(url, init);
            if (response && response.status >= 200 && response.status < 300) {
                return response;
            }
            const error = yield this.parseError(response);
            throw error;
        });
    }
    createFetchParams(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.configuration.baseUrl + context.path;
            if (context.query !== undefined && Object.keys(context.query).length !== 0) {
                // only add the querystring to the URL if there are query parameters.
                // this is done to avoid urls ending with a "?" character which buggy webservers
                // do not handle correctly sometimes.
                url += `?${querystring(context.query)}`;
            }
            const headers = Object.assign({}, this.configuration.headers, context.headers);
            Object.keys(headers).forEach((key) => (headers[key] === undefined ? delete headers[key] : {}));
            const initOverrideFn = typeof initOverrides === "function" ? initOverrides : () => __awaiter(this, void 0, void 0, function* () { return initOverrides; });
            const initParams = {
                method: context.method,
                headers,
                body: context.body,
                dispatcher: this.configuration.agent,
            };
            const overriddenInit = Object.assign(Object.assign({}, initParams), (yield initOverrideFn({
                init: initParams,
                context,
            })));
            const init = Object.assign(Object.assign({}, overriddenInit), { body: overriddenInit.body instanceof FormData ||
                    overriddenInit.body instanceof URLSearchParams ||
                    overriddenInit.body instanceof Blob
                    ? overriddenInit.body
                    : JSON.stringify(overriddenInit.body) });
            return { url, init };
        });
    }
}
/**
 * @private
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 * @private
 */
function querystring(params) {
    return Object.keys(params)
        .map((key) => querystringSingleKey(key, params[key]))
        .filter((part) => part.length > 0)
        .join("&");
}
function querystringSingleKey(key, value) {
    if (value instanceof Array) {
        const multiValue = value
            .map((singleValue) => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(key)}=`);
        return `${encodeURIComponent(key)}=${multiValue}`;
    }
    return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
}
/**
 * @private
 */
export function validateRequiredRequestParams(requestParameters, keys) {
    keys.forEach((key) => {
        if (requestParameters[key] === null || requestParameters[key] === undefined) {
            throw new RequiredError(key, `Required parameter requestParameters.${key} was null or undefined.`);
        }
    });
}
/**
 * @private
 */
export function applyQueryParams(requestParameters, keys) {
    return keys.reduce((acc, { key, config, }) => {
        let value;
        if (config.isArray) {
            if (config.isCollectionFormatMulti) {
                value = requestParameters[key];
            }
            else {
                value = requestParameters[key].join(COLLECTION_FORMATS[config.collectionFormat]);
            }
        }
        else {
            if (requestParameters[key] !== undefined) {
                value = requestParameters[key];
            }
        }
        return value !== undefined ? Object.assign(Object.assign({}, acc), { [key]: value }) : acc;
    }, {});
}
/**
 * @private
 */
export function parseFormParam(originalValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let value = originalValue;
        value = typeof value == "number" || typeof value == "boolean" ? "" + value : value;
        return value;
    });
}
