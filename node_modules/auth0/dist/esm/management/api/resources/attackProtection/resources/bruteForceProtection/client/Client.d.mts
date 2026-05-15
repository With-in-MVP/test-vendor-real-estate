import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace BruteForceProtectionClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BruteForceProtectionClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BruteForceProtectionClient.Options>;
    constructor(options: BruteForceProtectionClient.Options);
    /**
     * Retrieve details of the Brute-force Protection configuration of your tenant.
     *
     * @param {BruteForceProtectionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.bruteForceProtection.get()
     */
    get(requestOptions?: BruteForceProtectionClient.RequestOptions): core.HttpResponsePromise<Management.GetBruteForceSettingsResponseContent>;
    private __get;
    /**
     * Update the Brute-force Protection configuration of your tenant.
     *
     * @param {Management.UpdateBruteForceSettingsRequestContent} request
     * @param {BruteForceProtectionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.bruteForceProtection.update()
     */
    update(request?: Management.UpdateBruteForceSettingsRequestContent, requestOptions?: BruteForceProtectionClient.RequestOptions): core.HttpResponsePromise<Management.UpdateBruteForceSettingsResponseContent>;
    private __update;
}
