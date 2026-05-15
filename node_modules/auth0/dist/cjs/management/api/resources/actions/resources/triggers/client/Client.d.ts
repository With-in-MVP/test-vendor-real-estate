import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
import { BindingsClient } from "../resources/bindings/client/Client.js";
export declare namespace TriggersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TriggersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TriggersClient.Options>;
    protected _bindings: BindingsClient | undefined;
    constructor(options: TriggersClient.Options);
    get bindings(): BindingsClient;
    /**
     * Retrieve the set of triggers currently available within actions. A trigger is an extensibility point to which actions can be bound.
     *
     * @param {TriggersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.triggers.list()
     */
    list(requestOptions?: TriggersClient.RequestOptions): core.HttpResponsePromise<Management.ListActionTriggersResponseContent>;
    private __list;
}
