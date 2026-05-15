import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace SecretsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SecretsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SecretsClient.Options>;
    constructor(options: SecretsClient.Options);
    /**
     * Retrieve a hook's secrets by the ID of the hook.
     *
     * @param {string} id - ID of the hook to retrieve secrets from.
     * @param {SecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.hooks.secrets.get("id")
     */
    get(id: string, requestOptions?: SecretsClient.RequestOptions): core.HttpResponsePromise<Management.GetHookSecretResponseContent>;
    private __get;
    /**
     * Add one or more secrets to an existing hook. Accepts an object of key-value pairs, where the key is the name of the secret. A hook can have a maximum of 20 secrets.
     *
     * @param {string} id - The id of the hook to retrieve
     * @param {Management.CreateHookSecretRequestContent} request
     * @param {SecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.hooks.secrets.create("id", {
     *         "key": "value"
     *     })
     */
    create(id: string, request: Management.CreateHookSecretRequestContent, requestOptions?: SecretsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __create;
    /**
     * Delete one or more existing secrets for a given hook. Accepts an array of secret names to delete.
     *
     * @param {string} id - ID of the hook whose secrets to delete.
     * @param {Management.DeleteHookSecretRequestContent} request
     * @param {SecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.hooks.secrets.delete("id", ["string"])
     */
    delete(id: string, request: Management.DeleteHookSecretRequestContent, requestOptions?: SecretsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update one or more existing secrets for an existing hook. Accepts an object of key-value pairs, where the key is the name of the existing secret.
     *
     * @param {string} id - ID of the hook whose secrets to update.
     * @param {Management.UpdateHookSecretRequestContent} request
     * @param {SecretsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.hooks.secrets.update("id", {
     *         "key": "value"
     *     })
     */
    update(id: string, request: Management.UpdateHookSecretRequestContent, requestOptions?: SecretsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __update;
}
