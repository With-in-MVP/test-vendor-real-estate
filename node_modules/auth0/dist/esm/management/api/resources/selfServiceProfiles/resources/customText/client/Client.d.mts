import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace CustomTextClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CustomTextClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CustomTextClient.Options>;
    constructor(options: CustomTextClient.Options);
    /**
     * Retrieves text customizations for a given self-service profile, language and Self-Service Enterprise Configuration flow page.
     *
     * @param {string} id - The id of the self-service profile.
     * @param {Management.SelfServiceProfileCustomTextLanguageEnum} language - The language of the custom text.
     * @param {Management.SelfServiceProfileCustomTextPageEnum} page - The page where the custom text is shown.
     * @param {CustomTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.selfServiceProfiles.customText.list("id", "en", "get-started")
     */
    list(id: string, language: Management.SelfServiceProfileCustomTextLanguageEnum, page: Management.SelfServiceProfileCustomTextPageEnum, requestOptions?: CustomTextClient.RequestOptions): core.HttpResponsePromise<Management.ListSelfServiceProfileCustomTextResponseContent>;
    private __list;
    /**
     * Updates text customizations for a given self-service profile, language and Self-Service Enterprise Configuration flow page.
     *
     * @param {string} id - The id of the self-service profile.
     * @param {Management.SelfServiceProfileCustomTextLanguageEnum} language - The language of the custom text.
     * @param {Management.SelfServiceProfileCustomTextPageEnum} page - The page where the custom text is shown.
     * @param {Management.SetSelfServiceProfileCustomTextRequestContent} request
     * @param {CustomTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.selfServiceProfiles.customText.set("id", "en", "get-started", {
     *         "key": "value"
     *     })
     */
    set(id: string, language: Management.SelfServiceProfileCustomTextLanguageEnum, page: Management.SelfServiceProfileCustomTextPageEnum, request: Management.SetSelfServiceProfileCustomTextRequestContent, requestOptions?: CustomTextClient.RequestOptions): core.HttpResponsePromise<Management.SetSelfServiceProfileCustomTextResponseContent>;
    private __set;
}
