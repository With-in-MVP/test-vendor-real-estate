import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.mjs";
import * as core from "../../../../../../../../core/index.mjs";
import * as Management from "../../../../../../../index.mjs";
export declare namespace BindingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BindingsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BindingsClient.Options>;
    constructor(options: BindingsClient.Options);
    /**
     * Retrieve the actions that are bound to a trigger. Once an action is created and deployed, it must be attached (i.e. bound) to a trigger so that it will be executed as part of a flow. The list of actions returned reflects the order in which they will be executed during the appropriate flow.
     *
     * @param {Management.ActionTriggerTypeEnum} triggerId - An actions extensibility point.
     * @param {Management.ListActionTriggerBindingsRequestParameters} request
     * @param {BindingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.triggers.bindings.list("post-login", {
     *         page: 1,
     *         per_page: 1
     *     })
     */
    list(triggerId: Management.ActionTriggerTypeEnum, request?: Management.ListActionTriggerBindingsRequestParameters, requestOptions?: BindingsClient.RequestOptions): Promise<core.Page<Management.ActionBinding, Management.ListActionBindingsPaginatedResponseContent>>;
    /**
     * Update the actions that are bound (i.e. attached) to a trigger. Once an action is created and deployed, it must be attached (i.e. bound) to a trigger so that it will be executed as part of a flow. The order in which the actions are provided will determine the order in which they are executed.
     *
     * @param {Management.ActionTriggerTypeEnum} triggerId - An actions extensibility point.
     * @param {Management.UpdateActionBindingsRequestContent} request
     * @param {BindingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.triggers.bindings.updateMany("post-login")
     */
    updateMany(triggerId: Management.ActionTriggerTypeEnum, request?: Management.UpdateActionBindingsRequestContent, requestOptions?: BindingsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateActionBindingsResponseContent>;
    private __updateMany;
}
