import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SettingsClient.Options>;
    constructor(options: SettingsClient.Options);
    /**
     * Retrieve tenant settings. A list of fields to include or exclude may also be specified.
     *
     * @param {Management.GetTenantSettingsRequestParameters} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.tenants.settings.get({
     *         fields: "fields",
     *         include_fields: true
     *     })
     */
    get(request?: Management.GetTenantSettingsRequestParameters, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.GetTenantSettingsResponseContent>;
    private __get;
    /**
     * Update settings for a tenant.
     *
     * @param {Management.UpdateTenantSettingsRequestContent} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.tenants.settings.update()
     */
    update(request?: Management.UpdateTenantSettingsRequestContent, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateTenantSettingsResponseContent>;
    private __update;
}
