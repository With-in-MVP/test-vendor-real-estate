import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.mjs";
import * as core from "../../../../../../../../core/index.mjs";
import * as Management from "../../../../../../../index.mjs";
export declare namespace NewDeviceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class NewDeviceClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<NewDeviceClient.Options>;
    constructor(options: NewDeviceClient.Options);
    /**
     * Gets the risk assessment settings for the new device assessor
     *
     * @param {NewDeviceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.riskAssessments.settings.newDevice.get()
     */
    get(requestOptions?: NewDeviceClient.RequestOptions): core.HttpResponsePromise<Management.GetRiskAssessmentsSettingsNewDeviceResponseContent>;
    private __get;
    /**
     * Updates the risk assessment settings for the new device assessor
     *
     * @param {Management.UpdateRiskAssessmentsSettingsNewDeviceRequestContent} request
     * @param {NewDeviceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.riskAssessments.settings.newDevice.update({
     *         remember_for: 1
     *     })
     */
    update(request: Management.UpdateRiskAssessmentsSettingsNewDeviceRequestContent, requestOptions?: NewDeviceClient.RequestOptions): core.HttpResponsePromise<Management.UpdateRiskAssessmentsSettingsNewDeviceResponseContent>;
    private __update;
}
