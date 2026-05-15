import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
import { SynchronizationsClient } from "../resources/synchronizations/client/Client.mjs";
export declare namespace DirectoryProvisioningClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class DirectoryProvisioningClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DirectoryProvisioningClient.Options>;
    protected _synchronizations: SynchronizationsClient | undefined;
    constructor(options: DirectoryProvisioningClient.Options);
    get synchronizations(): SynchronizationsClient;
    /**
     * Retrieve a list of directory provisioning configurations of a tenant.
     *
     * @param {Management.ListDirectoryProvisioningsRequestParameters} request
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.list({
     *         from: "from",
     *         take: 1
     *     })
     */
    list(request?: Management.ListDirectoryProvisioningsRequestParameters, requestOptions?: DirectoryProvisioningClient.RequestOptions): Promise<core.Page<Management.DirectoryProvisioning, Management.ListDirectoryProvisioningsResponseContent>>;
    /**
     * Retrieve the directory provisioning configuration of a connection.
     *
     * @param {string} id - The id of the connection to retrieve its directory provisioning configuration
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.get("id")
     */
    get(id: string, requestOptions?: DirectoryProvisioningClient.RequestOptions): core.HttpResponsePromise<Management.GetDirectoryProvisioningResponseContent>;
    private __get;
    /**
     * Create a directory provisioning configuration for a connection.
     *
     * @param {string} id - The id of the connection to create its directory provisioning configuration
     * @param {Management.CreateDirectoryProvisioningRequestContent | null} request
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.create("id")
     */
    create(id: string, request?: Management.CreateDirectoryProvisioningRequestContent | null, requestOptions?: DirectoryProvisioningClient.RequestOptions): core.HttpResponsePromise<Management.CreateDirectoryProvisioningResponseContent>;
    private __create;
    /**
     * Delete the directory provisioning configuration of a connection.
     *
     * @param {string} id - The id of the connection to delete its directory provisioning configuration
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.delete("id")
     */
    delete(id: string, requestOptions?: DirectoryProvisioningClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update the directory provisioning configuration of a connection.
     *
     * @param {string} id - The id of the connection to create its directory provisioning configuration
     * @param {Management.UpdateDirectoryProvisioningRequestContent | null} request
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.update("id")
     */
    update(id: string, request?: Management.UpdateDirectoryProvisioningRequestContent | null, requestOptions?: DirectoryProvisioningClient.RequestOptions): core.HttpResponsePromise<Management.UpdateDirectoryProvisioningResponseContent>;
    private __update;
    /**
     * Retrieve the directory provisioning default attribute mapping of a connection.
     *
     * @param {string} id - The id of the connection to retrieve its directory provisioning configuration
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.getDefaultMapping("id")
     */
    getDefaultMapping(id: string, requestOptions?: DirectoryProvisioningClient.RequestOptions): core.HttpResponsePromise<Management.GetDirectoryProvisioningDefaultMappingResponseContent>;
    private __getDefaultMapping;
    /**
     * Retrieve the configured synchronized groups for a connection directory provisioning configuration.
     *
     * @param {string} id - The id of the connection to list synchronized groups for.
     * @param {Management.ListSynchronizedGroupsRequestParameters} request
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.listSynchronizedGroups("id", {
     *         from: "from",
     *         take: 1
     *     })
     */
    listSynchronizedGroups(id: string, request?: Management.ListSynchronizedGroupsRequestParameters, requestOptions?: DirectoryProvisioningClient.RequestOptions): Promise<core.Page<Management.SynchronizedGroupPayload, Management.ListSynchronizedGroupsResponseContent>>;
    /**
     * Create or replace the selected groups for a connection directory provisioning configuration.
     *
     * @param {string} id - The id of the connection to create or replace synchronized groups for
     * @param {Management.ReplaceSynchronizedGroupsRequestContent} request
     * @param {DirectoryProvisioningClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.set("id", {
     *         groups: [{
     *                 id: "id"
     *             }]
     *     })
     */
    set(id: string, request: Management.ReplaceSynchronizedGroupsRequestContent, requestOptions?: DirectoryProvisioningClient.RequestOptions): core.HttpResponsePromise<void>;
    private __set;
}
