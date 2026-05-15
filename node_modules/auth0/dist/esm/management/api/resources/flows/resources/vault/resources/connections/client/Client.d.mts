import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.mjs";
import * as core from "../../../../../../../../core/index.mjs";
import * as Management from "../../../../../../../index.mjs";
export declare namespace ConnectionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ConnectionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ConnectionsClient.Options>;
    constructor(options: ConnectionsClient.Options);
    /**
     * @param {Management.ListFlowsVaultConnectionsRequestParameters} request
     * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.vault.connections.list({
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true
     *     })
     */
    list(request?: Management.ListFlowsVaultConnectionsRequestParameters, requestOptions?: ConnectionsClient.RequestOptions): Promise<core.Page<Management.FlowsVaultConnectionSummary, Management.ListFlowsVaultConnectionsOffsetPaginatedResponseContent>>;
    /**
     * @param {Management.CreateFlowsVaultConnectionRequestContent} request
     * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.vault.connections.create({
     *         name: "name",
     *         app_id: "ACTIVECAMPAIGN",
     *         setup: {
     *             type: "API_KEY",
     *             api_key: "api_key",
     *             base_url: "base_url"
     *         }
     *     })
     */
    create(request: Management.CreateFlowsVaultConnectionRequestContent, requestOptions?: ConnectionsClient.RequestOptions): core.HttpResponsePromise<Management.CreateFlowsVaultConnectionResponseContent>;
    private __create;
    /**
     * @param {string} id - Flows Vault connection ID
     * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.vault.connections.get("id")
     */
    get(id: string, requestOptions?: ConnectionsClient.RequestOptions): core.HttpResponsePromise<Management.GetFlowsVaultConnectionResponseContent>;
    private __get;
    /**
     * @param {string} id - Vault connection id
     * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.vault.connections.delete("id")
     */
    delete(id: string, requestOptions?: ConnectionsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * @param {string} id - Flows Vault connection ID
     * @param {Management.UpdateFlowsVaultConnectionRequestContent} request
     * @param {ConnectionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.vault.connections.update("id")
     */
    update(id: string, request?: Management.UpdateFlowsVaultConnectionRequestContent, requestOptions?: ConnectionsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateFlowsVaultConnectionResponseContent>;
    private __update;
}
