import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace ExecutionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ExecutionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ExecutionsClient.Options>;
    constructor(options: ExecutionsClient.Options);
    /**
     * Retrieve information about a specific execution of a trigger. Relevant execution IDs will be included in tenant logs generated as part of that authentication flow. Executions will only be stored for 10 days after their creation.
     *
     * @param {string} id - The ID of the execution to retrieve.
     * @param {ExecutionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.executions.get("id")
     */
    get(id: string, requestOptions?: ExecutionsClient.RequestOptions): core.HttpResponsePromise<Management.GetActionExecutionResponseContent>;
    private __get;
}
