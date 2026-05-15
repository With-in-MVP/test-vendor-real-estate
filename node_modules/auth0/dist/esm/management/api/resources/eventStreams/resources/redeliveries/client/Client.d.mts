import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace RedeliveriesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class RedeliveriesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RedeliveriesClient.Options>;
    constructor(options: RedeliveriesClient.Options);
    /**
     * @param {string} id - Unique identifier for the event stream.
     * @param {Management.CreateEventStreamRedeliveryRequestContent} request
     * @param {RedeliveriesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.eventStreams.redeliveries.create("id")
     */
    create(id: string, request?: Management.CreateEventStreamRedeliveryRequestContent, requestOptions?: RedeliveriesClient.RequestOptions): core.HttpResponsePromise<Management.CreateEventStreamRedeliveryResponseContent>;
    private __create;
    /**
     * @param {string} id - Unique identifier for the event stream.
     * @param {string} event_id - Unique identifier for the event
     * @param {RedeliveriesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.eventStreams.redeliveries.createById("id", "event_id")
     */
    createById(id: string, event_id: string, requestOptions?: RedeliveriesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __createById;
}
