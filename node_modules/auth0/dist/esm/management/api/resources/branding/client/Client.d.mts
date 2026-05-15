import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
import { PhoneClient } from "../resources/phone/client/Client.mjs";
import { TemplatesClient } from "../resources/templates/client/Client.mjs";
import { ThemesClient } from "../resources/themes/client/Client.mjs";
export declare namespace BrandingClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BrandingClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BrandingClient.Options>;
    protected _templates: TemplatesClient | undefined;
    protected _themes: ThemesClient | undefined;
    protected _phone: PhoneClient | undefined;
    constructor(options: BrandingClient.Options);
    get templates(): TemplatesClient;
    get themes(): ThemesClient;
    get phone(): PhoneClient;
    /**
     * Retrieve branding settings.
     *
     * @param {BrandingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.get()
     */
    get(requestOptions?: BrandingClient.RequestOptions): core.HttpResponsePromise<Management.GetBrandingResponseContent>;
    private __get;
    /**
     * Update branding settings.
     *
     * @param {Management.UpdateBrandingRequestContent} request
     * @param {BrandingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.update()
     */
    update(request?: Management.UpdateBrandingRequestContent, requestOptions?: BrandingClient.RequestOptions): core.HttpResponsePromise<Management.UpdateBrandingResponseContent>;
    private __update;
}
