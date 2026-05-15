import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace DeliveriesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class DeliveriesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DeliveriesClient.Options>;
    constructor(options: DeliveriesClient.Options);
    /**
     * @param {string} id - Unique identifier for the event stream.
     * @param {Management.ListEventStreamDeliveriesRequestParameters} request
     * @param {DeliveriesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.eventStreams.deliveries.list("id", {
     *         statuses: "statuses",
     *         event_types: "event_types",
     *         date_from: "date_from",
     *         date_to: "date_to",
     *         from: "from",
     *         take: 1
     *     })
     */
    list(id: string, request?: Management.ListEventStreamDeliveriesRequestParameters, requestOptions?: DeliveriesClient.RequestOptions): core.HttpResponsePromise<Management.EventStreamDelivery[]>;
    private __list;
    /**
     * @param {string} id - Unique identifier for the event stream.
     * @param {string} event_id - Unique identifier for the event
     * @param {DeliveriesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.eventStreams.deliveries.getHistory("id", "event_id")
     */
    getHistory(id: string, event_id: string, requestOptions?: DeliveriesClient.RequestOptions): core.HttpResponsePromise<Management.GetEventStreamDeliveryHistoryResponseContent>;
    private __getHistory;
}
