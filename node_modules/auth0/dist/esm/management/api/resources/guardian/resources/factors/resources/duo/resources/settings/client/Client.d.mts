import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../../../BaseClient.mjs";
import * as core from "../../../../../../../../../../core/index.mjs";
import * as Management from "../../../../../../../../../index.mjs";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SettingsClient.Options>;
    constructor(options: SettingsClient.Options);
    /**
     * Retrieves the DUO account and factor configuration.
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.duo.settings.get()
     */
    get(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.GetGuardianFactorDuoSettingsResponseContent>;
    private __get;
    /**
     * Set the DUO account configuration and other properties specific to this factor.
     *
     * @param {Management.SetGuardianFactorDuoSettingsRequestContent} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.duo.settings.set()
     */
    set(request?: Management.SetGuardianFactorDuoSettingsRequestContent, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.SetGuardianFactorDuoSettingsResponseContent>;
    private __set;
    /**
     * @param {Management.UpdateGuardianFactorDuoSettingsRequestContent} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.duo.settings.update()
     */
    update(request?: Management.UpdateGuardianFactorDuoSettingsRequestContent, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateGuardianFactorDuoSettingsResponseContent>;
    private __update;
}
