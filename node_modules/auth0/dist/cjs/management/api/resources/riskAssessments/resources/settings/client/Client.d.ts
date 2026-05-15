import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
import { NewDeviceClient } from "../resources/newDevice/client/Client.js";
export declare namespace SettingsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SettingsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SettingsClient.Options>;
    protected _newDevice: NewDeviceClient | undefined;
    constructor(options: SettingsClient.Options);
    get newDevice(): NewDeviceClient;
    /**
     * Gets the tenant settings for risk assessments
     *
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.riskAssessments.settings.get()
     */
    get(requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.GetRiskAssessmentsSettingsResponseContent>;
    private __get;
    /**
     * Updates the tenant settings for risk assessments
     *
     * @param {Management.UpdateRiskAssessmentsSettingsRequestContent} request
     * @param {SettingsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.riskAssessments.settings.update({
     *         enabled: true
     *     })
     */
    update(request: Management.UpdateRiskAssessmentsSettingsRequestContent, requestOptions?: SettingsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateRiskAssessmentsSettingsResponseContent>;
    private __update;
}
