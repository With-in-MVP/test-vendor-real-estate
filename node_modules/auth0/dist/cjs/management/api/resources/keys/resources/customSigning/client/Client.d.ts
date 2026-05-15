import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace CustomSigningClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CustomSigningClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CustomSigningClient.Options>;
    constructor(options: CustomSigningClient.Options);
    /**
     * Get entire jwks representation of custom signing keys.
     *
     * @param {CustomSigningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.customSigning.get()
     */
    get(requestOptions?: CustomSigningClient.RequestOptions): core.HttpResponsePromise<Management.GetCustomSigningKeysResponseContent>;
    private __get;
    /**
     * Create or replace entire jwks representation of custom signing keys.
     *
     * @param {Management.SetCustomSigningKeysRequestContent} request
     * @param {CustomSigningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.customSigning.set({
     *         keys: [{
     *                 kty: "EC"
     *             }]
     *     })
     */
    set(request: Management.SetCustomSigningKeysRequestContent, requestOptions?: CustomSigningClient.RequestOptions): core.HttpResponsePromise<Management.SetCustomSigningKeysResponseContent>;
    private __set;
    /**
     * Delete entire jwks representation of custom signing keys.
     *
     * @param {CustomSigningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.customSigning.delete()
     */
    delete(requestOptions?: CustomSigningClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
}
