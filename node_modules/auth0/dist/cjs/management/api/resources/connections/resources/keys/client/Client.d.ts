import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace KeysClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class KeysClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<KeysClient.Options>;
    constructor(options: KeysClient.Options);
    /**
     * Gets the connection keys for the Okta or OIDC connection strategy.
     *
     * @param {string} id - ID of the connection
     * @param {KeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.keys.get("id")
     */
    get(id: string, requestOptions?: KeysClient.RequestOptions): core.HttpResponsePromise<Management.ConnectionKey[]>;
    private __get;
    /**
     * Provision initial connection keys for Okta or OIDC connection strategies. This endpoint allows you to create keys before configuring the connection to use Private Key JWT authentication, enabling zero-downtime transitions.
     *
     * @param {string} id - ID of the connection
     * @param {Management.PostConnectionKeysRequestContent | null} request
     * @param {KeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.keys.create("id")
     */
    create(id: string, request?: Management.PostConnectionKeysRequestContent | null, requestOptions?: KeysClient.RequestOptions): core.HttpResponsePromise<Management.PostConnectionsKeysResponseContent>;
    private __create;
    /**
     * Rotates the connection keys for the Okta or OIDC connection strategies.
     *
     * @param {string} id - ID of the connection
     * @param {Management.RotateConnectionKeysRequestContent | null} request
     * @param {KeysClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.keys.rotate("id")
     */
    rotate(id: string, request?: Management.RotateConnectionKeysRequestContent | null, requestOptions?: KeysClient.RequestOptions): core.HttpResponsePromise<Management.RotateConnectionsKeysResponseContent>;
    private __rotate;
}
