import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace ClientGrantsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ClientGrantsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ClientGrantsClient.Options>;
    constructor(options: ClientGrantsClient.Options);
    /**
     * @param {string} id - Organization identifier.
     * @param {Management.ListOrganizationClientGrantsRequestParameters} request
     * @param {ClientGrantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.organizations.clientGrants.list("id", {
     *         audience: "audience",
     *         client_id: "client_id",
     *         grant_ids: ["grant_ids"],
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true
     *     })
     */
    list(id: string, request?: Management.ListOrganizationClientGrantsRequestParameters, requestOptions?: ClientGrantsClient.RequestOptions): Promise<core.Page<Management.OrganizationClientGrant, Management.ListOrganizationClientGrantsOffsetPaginatedResponseContent>>;
    /**
     * @param {string} id - Organization identifier.
     * @param {Management.AssociateOrganizationClientGrantRequestContent} request
     * @param {ClientGrantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.organizations.clientGrants.create("id", {
     *         grant_id: "grant_id"
     *     })
     */
    create(id: string, request: Management.AssociateOrganizationClientGrantRequestContent, requestOptions?: ClientGrantsClient.RequestOptions): core.HttpResponsePromise<Management.AssociateOrganizationClientGrantResponseContent>;
    private __create;
    /**
     * @param {string} id - Organization identifier.
     * @param {string} grant_id - The Client Grant ID to remove from the organization
     * @param {ClientGrantsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.organizations.clientGrants.delete("id", "grant_id")
     */
    delete(id: string, grant_id: string, requestOptions?: ClientGrantsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
}
