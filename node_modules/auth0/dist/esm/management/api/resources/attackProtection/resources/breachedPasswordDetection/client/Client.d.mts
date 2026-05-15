import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace BreachedPasswordDetectionClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BreachedPasswordDetectionClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BreachedPasswordDetectionClient.Options>;
    constructor(options: BreachedPasswordDetectionClient.Options);
    /**
     * Retrieve details of the Breached Password Detection configuration of your tenant.
     *
     * @param {BreachedPasswordDetectionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.breachedPasswordDetection.get()
     */
    get(requestOptions?: BreachedPasswordDetectionClient.RequestOptions): core.HttpResponsePromise<Management.GetBreachedPasswordDetectionSettingsResponseContent>;
    private __get;
    /**
     * Update details of the Breached Password Detection configuration of your tenant.
     *
     * @param {Management.UpdateBreachedPasswordDetectionSettingsRequestContent} request
     * @param {BreachedPasswordDetectionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.breachedPasswordDetection.update()
     */
    update(request?: Management.UpdateBreachedPasswordDetectionSettingsRequestContent, requestOptions?: BreachedPasswordDetectionClient.RequestOptions): core.HttpResponsePromise<Management.UpdateBreachedPasswordDetectionSettingsResponseContent>;
    private __update;
}
