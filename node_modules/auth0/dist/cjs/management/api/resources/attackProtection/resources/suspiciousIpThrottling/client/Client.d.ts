import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace SuspiciousIpThrottlingClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SuspiciousIpThrottlingClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SuspiciousIpThrottlingClient.Options>;
    constructor(options: SuspiciousIpThrottlingClient.Options);
    /**
     * Retrieve details of the Suspicious IP Throttling configuration of your tenant.
     *
     * @param {SuspiciousIpThrottlingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.suspiciousIpThrottling.get()
     */
    get(requestOptions?: SuspiciousIpThrottlingClient.RequestOptions): core.HttpResponsePromise<Management.GetSuspiciousIpThrottlingSettingsResponseContent>;
    private __get;
    /**
     * Update the details of the Suspicious IP Throttling configuration of your tenant.
     *
     * @param {Management.UpdateSuspiciousIpThrottlingSettingsRequestContent} request
     * @param {SuspiciousIpThrottlingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.suspiciousIpThrottling.update()
     */
    update(request?: Management.UpdateSuspiciousIpThrottlingSettingsRequestContent, requestOptions?: SuspiciousIpThrottlingClient.RequestOptions): core.HttpResponsePromise<Management.UpdateSuspiciousIpThrottlingSettingsResponseContent>;
    private __update;
}
