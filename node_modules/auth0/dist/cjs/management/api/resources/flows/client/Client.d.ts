import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Management from "../../../index.js";
import { ExecutionsClient } from "../resources/executions/client/Client.js";
import { VaultClient } from "../resources/vault/client/Client.js";
export declare namespace FlowsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FlowsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FlowsClient.Options>;
    protected _executions: ExecutionsClient | undefined;
    protected _vault: VaultClient | undefined;
    constructor(options: FlowsClient.Options);
    get executions(): ExecutionsClient;
    get vault(): VaultClient;
    /**
     * @param {Management.ListFlowsRequestParameters} request
     * @param {FlowsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.list({
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true,
     *         hydrate: ["form_count"],
     *         synchronous: true
     *     })
     */
    list(request?: Management.ListFlowsRequestParameters, requestOptions?: FlowsClient.RequestOptions): Promise<core.Page<Management.FlowSummary, Management.ListFlowsOffsetPaginatedResponseContent>>;
    /**
     * @param {Management.CreateFlowRequestContent} request
     * @param {FlowsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.create({
     *         name: "name"
     *     })
     */
    create(request: Management.CreateFlowRequestContent, requestOptions?: FlowsClient.RequestOptions): core.HttpResponsePromise<Management.CreateFlowResponseContent>;
    private __create;
    /**
     * @param {string} id - Flow identifier
     * @param {Management.GetFlowRequestParameters} request
     * @param {FlowsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.get("id", {
     *         hydrate: ["form_count"]
     *     })
     */
    get(id: string, request?: Management.GetFlowRequestParameters, requestOptions?: FlowsClient.RequestOptions): core.HttpResponsePromise<Management.GetFlowResponseContent>;
    private __get;
    /**
     * @param {string} id - Flow id
     * @param {FlowsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.delete("id")
     */
    delete(id: string, requestOptions?: FlowsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * @param {string} id - Flow identifier
     * @param {Management.UpdateFlowRequestContent} request
     * @param {FlowsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.update("id")
     */
    update(id: string, request?: Management.UpdateFlowRequestContent, requestOptions?: FlowsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateFlowResponseContent>;
    private __update;
}
