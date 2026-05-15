import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
export declare namespace StatsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class StatsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<StatsClient.Options>;
    constructor(options: StatsClient.Options);
    /**
     * Retrieve the number of active users that logged in during the last 30 days.
     *
     * @param {StatsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.stats.getActiveUsersCount()
     */
    getActiveUsersCount(requestOptions?: StatsClient.RequestOptions): core.HttpResponsePromise<Management.GetActiveUsersCountStatsResponseContent>;
    private __getActiveUsersCount;
    /**
     * Retrieve the number of logins, signups and breached-password detections (subscription required) that occurred each day within a specified date range.
     *
     * @param {Management.GetDailyStatsRequestParameters} request
     * @param {StatsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.stats.getDaily({
     *         from: "from",
     *         to: "to"
     *     })
     */
    getDaily(request?: Management.GetDailyStatsRequestParameters, requestOptions?: StatsClient.RequestOptions): core.HttpResponsePromise<Management.DailyStats[]>;
    private __getDaily;
}
