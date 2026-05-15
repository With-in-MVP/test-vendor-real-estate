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
     * Retrieve custom text for a specific prompt and language.
     *
     * @param {Management.PromptGroupNameEnum} prompt - Name of the prompt.
     * @param {Management.PromptLanguageEnum} language - Language to update.
     * @param {CustomTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.prompts.customText.get("login", "am")
     */
    get(prompt: Management.PromptGroupNameEnum, language: Management.PromptLanguageEnum, requestOptions?: CustomTextClient.RequestOptions): core.HttpResponsePromise<Management.GetCustomTextsByLanguageResponseContent>;
    private __get;
    /**
     * Set custom text for a specific prompt. Existing texts will be overwritten.
     *
     * @param {Management.PromptGroupNameEnum} prompt - Name of the prompt.
     * @param {Management.PromptLanguageEnum} language - Language to update.
     * @param {Management.SetsCustomTextsByLanguageRequestContent} request
     * @param {CustomTextClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.prompts.customText.set("login", "am", {
     *         "key": "value"
     *     })
     */
    set(prompt: Management.PromptGroupNameEnum, language: Management.PromptLanguageEnum, request: Management.SetsCustomTextsByLanguageRequestContent, requestOptions?: CustomTextClient.RequestOptions): core.HttpResponsePromise<void>;
    private __set;
}
