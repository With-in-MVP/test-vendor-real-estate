import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
export declare namespace ResourceServersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ResourceServersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ResourceServersClient.Options>;
    constructor(options: ResourceServersClient.Options);
    /**
     * Retrieve details of all APIs associated with your tenant.
     *
     * @param {Management.ListResourceServerRequestParameters} request
     * @param {ResourceServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.resourceServers.list({
     *         identifiers: ["identifiers"],
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true,
     *         include_fields: true
     *     })
     */
    list(request?: Management.ListResourceServerRequestParameters, requestOptions?: ResourceServersClient.RequestOptions): Promise<core.Page<Management.ResourceServer, Management.ListResourceServerOffsetPaginatedResponseContent>>;
    /**
     * Create a new API associated with your tenant. Note that all new APIs must be registered with Auth0. For more information, read <a href="https://www.auth0.com/docs/get-started/apis"> APIs</a>.
     *
     * @param {Management.CreateResourceServerRequestContent} request
     * @param {ResourceServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.resourceServers.create({
     *         identifier: "identifier"
     *     })
     */
    create(request: Management.CreateResourceServerRequestContent, requestOptions?: ResourceServersClient.RequestOptions): core.HttpResponsePromise<Management.CreateResourceServerResponseContent>;
    private __create;
    /**
     * Retrieve <a href="https://auth0.com/docs/apis">API</a> details with the given ID.
     *
     * @param {string} id - ID or audience of the resource server to retrieve.
     * @param {Management.GetResourceServerRequestParameters} request
     * @param {ResourceServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.resourceServers.get("id", {
     *         include_fields: true
     *     })
     */
    get(id: string, request?: Management.GetResourceServerRequestParameters, requestOptions?: ResourceServersClient.RequestOptions): core.HttpResponsePromise<Management.GetResourceServerResponseContent>;
    private __get;
    /**
     * Delete an existing API by ID. For more information, read <a href="https://www.auth0.com/docs/get-started/apis/api-settings">API Settings</a>.
     *
     * @param {string} id - ID or the audience of the resource server to delete.
     * @param {ResourceServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.resourceServers.delete("id")
     */
    delete(id: string, requestOptions?: ResourceServersClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Change an existing API setting by resource server ID. For more information, read <a href="https://www.auth0.com/docs/get-started/apis/api-settings">API Settings</a>.
     *
     * @param {string} id - ID or audience of the resource server to update.
     * @param {Management.UpdateResourceServerRequestContent} request
     * @param {ResourceServersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.resourceServers.update("id")
     */
    update(id: string, request?: Management.UpdateResourceServerRequestContent, requestOptions?: ResourceServersClient.RequestOptions): core.HttpResponsePromise<Management.UpdateResourceServerResponseContent>;
    private __update;
}
