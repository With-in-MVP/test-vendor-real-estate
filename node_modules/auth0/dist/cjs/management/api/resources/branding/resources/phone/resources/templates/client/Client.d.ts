import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.js";
import * as core from "../../../../../../../../core/index.js";
import * as Management from "../../../../../../../index.js";
export declare namespace TemplatesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TemplatesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TemplatesClient.Options>;
    constructor(options: TemplatesClient.Options);
    /**
     * @param {Management.ListPhoneTemplatesRequestParameters} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.list({
     *         disabled: true
     *     })
     */
    list(request?: Management.ListPhoneTemplatesRequestParameters, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.ListPhoneTemplatesResponseContent>;
    private __list;
    /**
     * @param {Management.CreatePhoneTemplateRequestContent} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.create()
     */
    create(request?: Management.CreatePhoneTemplateRequestContent, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.CreatePhoneTemplateResponseContent>;
    private __create;
    /**
     * @param {string} id
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.get("id")
     */
    get(id: string, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.GetPhoneTemplateResponseContent>;
    private __get;
    /**
     * @param {string} id
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.delete("id")
     */
    delete(id: string, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * @param {string} id
     * @param {Management.UpdatePhoneTemplateRequestContent} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.update("id")
     */
    update(id: string, request?: Management.UpdatePhoneTemplateRequestContent, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.UpdatePhoneTemplateResponseContent>;
    private __update;
    /**
     * @param {string} id
     * @param {Management.ResetPhoneTemplateRequestContent} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.reset("id", {
     *         "key": "value"
     *     })
     */
    reset(id: string, request?: Management.ResetPhoneTemplateRequestContent, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.ResetPhoneTemplateResponseContent>;
    private __reset;
    /**
     * @param {string} id
     * @param {Management.CreatePhoneTemplateTestNotificationRequestContent} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.phone.templates.test("id", {
     *         to: "to"
     *     })
     */
    test(id: string, request: Management.CreatePhoneTemplateTestNotificationRequestContent, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.CreatePhoneTemplateTestNotificationResponseContent>;
    private __test;
}
