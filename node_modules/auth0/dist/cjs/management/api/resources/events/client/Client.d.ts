import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Management from "../../../index.js";
export declare namespace EventsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class EventsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EventsClient.Options>;
    constructor(options: EventsClient.Options);
    /**
     * Subscribe to events via Server-Sent Events (SSE)
     */
    subscribe(request?: Management.SubscribeEventsRequestParameters, requestOptions?: EventsClient.RequestOptions): core.HttpResponsePromise<core.Stream<Management.EventStreamSubscribeEventsResponseContent>>;
    private __subscribe;
}
