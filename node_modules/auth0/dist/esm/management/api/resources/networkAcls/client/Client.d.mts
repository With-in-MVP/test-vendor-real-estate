import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
export declare namespace NetworkAclsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class NetworkAclsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<NetworkAclsClient.Options>;
    constructor(options: NetworkAclsClient.Options);
    /**
     * Get all access control list entries for your client.
     *
     * @param {Management.ListNetworkAclsRequestParameters} request
     * @param {NetworkAclsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.networkAcls.list({
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true
     *     })
     */
    list(request?: Management.ListNetworkAclsRequestParameters, requestOptions?: NetworkAclsClient.RequestOptions): Promise<core.Page<Management.NetworkAclsResponseContent, Management.ListNetworkAclsOffsetPaginatedResponseContent>>;
    /**
     * Create a new access control list for your client.
     *
     * @param {Management.CreateNetworkAclRequestContent} request
     * @param {NetworkAclsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     await client.networkAcls.create({
     *         description: "description",
     *         active: true,
     *         rule: {
     *             action: {},
     *             scope: "management"
     *         }
     *     })
     */
    create(request: Management.CreateNetworkAclRequestContent, requestOptions?: NetworkAclsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __create;
    /**
     * Get a specific access control list entry for your client.
     *
     * @param {string} id - The id of the access control list to retrieve.
     * @param {NetworkAclsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.networkAcls.get("id")
     */
    get(id: string, requestOptions?: NetworkAclsClient.RequestOptions): core.HttpResponsePromise<Management.GetNetworkAclsResponseContent>;
    private __get;
    /**
     * Update existing access control list for your client.
     *
     * @param {string} id - The id of the ACL to update.
     * @param {Management.SetNetworkAclRequestContent} request
     * @param {NetworkAclsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.networkAcls.set("id", {
     *         description: "description",
     *         active: true,
     *         rule: {
     *             action: {},
     *             scope: "management"
     *         }
     *     })
     */
    set(id: string, request: Management.SetNetworkAclRequestContent, requestOptions?: NetworkAclsClient.RequestOptions): core.HttpResponsePromise<Management.SetNetworkAclsResponseContent>;
    private __set;
    /**
     * Delete existing access control list for your client.
     *
     * @param {string} id - The id of the ACL to delete
     * @param {NetworkAclsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.networkAcls.delete("id")
     */
    delete(id: string, requestOptions?: NetworkAclsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update existing access control list for your client.
     *
     * @param {string} id - The id of the ACL to update.
     * @param {Management.UpdateNetworkAclRequestContent} request
     * @param {NetworkAclsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.networkAcls.update("id")
     */
    update(id: string, request?: Management.UpdateNetworkAclRequestContent, requestOptions?: NetworkAclsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateNetworkAclResponseContent>;
    private __update;
}
