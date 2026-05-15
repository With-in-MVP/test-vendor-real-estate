import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace CaptchaClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CaptchaClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CaptchaClient.Options>;
    constructor(options: CaptchaClient.Options);
    /**
     * Get the CAPTCHA configuration for your client.
     *
     * @param {CaptchaClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.captcha.get()
     */
    get(requestOptions?: CaptchaClient.RequestOptions): core.HttpResponsePromise<Management.GetAttackProtectionCaptchaResponseContent>;
    private __get;
    /**
     * Update existing CAPTCHA configuration for your client.
     *
     * @param {Management.UpdateAttackProtectionCaptchaRequestContent} request
     * @param {CaptchaClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.attackProtection.captcha.update()
     */
    update(request?: Management.UpdateAttackProtectionCaptchaRequestContent, requestOptions?: CaptchaClient.RequestOptions): core.HttpResponsePromise<Management.UpdateAttackProtectionCaptchaResponseContent>;
    private __update;
}
