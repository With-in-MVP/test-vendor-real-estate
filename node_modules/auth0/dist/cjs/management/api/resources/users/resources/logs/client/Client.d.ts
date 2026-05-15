import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace LogsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LogsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<LogsClient.Options>;
    constructor(options: LogsClient.Options);
    /**
     * Retrieve log events for a specific user.
     *
     * Note: For more information on all possible event types, their respective acronyms and descriptions, see <a href="https://auth0.com/docs/logs/log-event-type-codes">Log Event Type Codes</a>.
     *
     * For more information on the list of fields that can be used in `sort`, see <a href="https://auth0.com/docs/logs/log-search-query-syntax#searchable-fields">Searchable Fields</a>.
     *
     * Auth0 <a href="https://auth0.com/docs/logs/retrieve-log-events-using-mgmt-api#limitations">limits the number of logs</a> you can return by search criteria to 100 logs per request. Furthermore, you may only paginate through up to 1,000 search results. If you exceed this threshold, please redefine your search.
     *
     * @param {string} id - ID of the user of the logs to retrieve
     * @param {Management.ListUserLogsRequestParameters} request
     * @param {LogsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.logs.list("id", {
     *         page: 1,
     *         per_page: 1,
     *         sort: "sort",
     *         include_totals: true
     *     })
     */
    list(id: string, request?: Management.ListUserLogsRequestParameters, requestOptions?: LogsClient.RequestOptions): Promise<core.Page<Management.Log, Management.UserListLogOffsetPaginatedResponseContent>>;
}
