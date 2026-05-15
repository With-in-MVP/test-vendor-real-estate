import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace BotDetectionClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BotDetectionClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BotDetectionClient.Options>;
    constructor(options: BotDetectionClient.Options);
    /**
     * Get the Bot Detection configuration of your tenant.
     *
     * @param {BotDetectionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.botDetection.get()
     */
    get(requestOptions?: BotDetectionClient.RequestOptions): core.HttpResponsePromise<Management.GetBotDetectionSettingsResponseContent>;
    private __get;
    /**
     * Update the Bot Detection configuration of your tenant.
     *
     * @param {Management.UpdateBotDetectionSettingsRequestContent} request
     * @param {BotDetectionClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.botDetection.update()
     */
    update(request?: Management.UpdateBotDetectionSettingsRequestContent, requestOptions?: BotDetectionClient.RequestOptions): core.HttpResponsePromise<Management.UpdateBotDetectionSettingsResponseContent>;
    private __update;
}
