import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace ExecutionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ExecutionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ExecutionsClient.Options>;
    constructor(options: ExecutionsClient.Options);
    /**
     * @param {string} flow_id - Flow id
     * @param {Management.ListFlowExecutionsRequestParameters} request
     * @param {ExecutionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.executions.list("flow_id", {
     *         from: "from",
     *         take: 1
     *     })
     */
    list(flow_id: string, request?: Management.ListFlowExecutionsRequestParameters, requestOptions?: ExecutionsClient.RequestOptions): Promise<core.Page<Management.FlowExecutionSummary, Management.ListFlowExecutionsPaginatedResponseContent>>;
    /**
     * @param {string} flow_id - Flow id
     * @param {string} execution_id - Flow execution id
     * @param {Management.GetFlowExecutionRequestParameters} request
     * @param {ExecutionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.executions.get("flow_id", "execution_id", {
     *         hydrate: ["debug"]
     *     })
     */
    get(flow_id: string, execution_id: string, request?: Management.GetFlowExecutionRequestParameters, requestOptions?: ExecutionsClient.RequestOptions): core.HttpResponsePromise<Management.GetFlowExecutionResponseContent>;
    private __get;
    /**
     * @param {string} flow_id - Flows id
     * @param {string} execution_id - Flow execution identifier
     * @param {ExecutionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.flows.executions.delete("flow_id", "execution_id")
     */
    delete(flow_id: string, execution_id: string, requestOptions?: ExecutionsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
}
