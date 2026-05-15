import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace EncryptionClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class EncryptionClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EncryptionClient.Options>;
    constructor(options: EncryptionClient.Options);
    /**
     * Retrieve details of all the encryption keys associated with your tenant.
     *
     * @param {Management.ListEncryptionKeysRequestParameters} request
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.list({
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true
     *     })
     */
    list(request?: Management.ListEncryptionKeysRequestParameters, requestOptions?: EncryptionClient.RequestOptions): Promise<core.Page<Management.EncryptionKey, Management.ListEncryptionKeyOffsetPaginatedResponseContent>>;
    /**
     * Create the new, pre-activated encryption key, without the key material.
     *
     * @param {Management.CreateEncryptionKeyRequestContent} request
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.create({
     *         type: "customer-provided-root-key"
     *     })
     */
    create(request: Management.CreateEncryptionKeyRequestContent, requestOptions?: EncryptionClient.RequestOptions): core.HttpResponsePromise<Management.CreateEncryptionKeyResponseContent>;
    private __create;
    /**
     * Perform rekeying operation on the key hierarchy.
     *
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.rekey()
     */
    rekey(requestOptions?: EncryptionClient.RequestOptions): core.HttpResponsePromise<void>;
    private __rekey;
    /**
     * Retrieve details of the encryption key with the given ID.
     *
     * @param {string} kid - Encryption key ID
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.get("kid")
     */
    get(kid: string, requestOptions?: EncryptionClient.RequestOptions): core.HttpResponsePromise<Management.GetEncryptionKeyResponseContent>;
    private __get;
    /**
     * Import wrapped key material and activate encryption key.
     *
     * @param {string} kid - Encryption key ID
     * @param {Management.ImportEncryptionKeyRequestContent} request
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.import("kid", {
     *         wrapped_key: "wrapped_key"
     *     })
     */
    import(kid: string, request: Management.ImportEncryptionKeyRequestContent, requestOptions?: EncryptionClient.RequestOptions): core.HttpResponsePromise<Management.ImportEncryptionKeyResponseContent>;
    private __import;
    /**
     * Delete the custom provided encryption key with the given ID and move back to using native encryption key.
     *
     * @param {string} kid - Encryption key ID
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.delete("kid")
     */
    delete(kid: string, requestOptions?: EncryptionClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Create the public wrapping key to wrap your own encryption key material.
     *
     * @param {string} kid - Encryption key ID
     * @param {EncryptionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.keys.encryption.createPublicWrappingKey("kid")
     */
    createPublicWrappingKey(kid: string, requestOptions?: EncryptionClient.RequestOptions): core.HttpResponsePromise<Management.CreateEncryptionKeyPublicWrappingResponseContent>;
    private __createPublicWrappingKey;
}
