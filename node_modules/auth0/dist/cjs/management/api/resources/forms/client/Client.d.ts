import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Management from "../../../index.js";
export declare namespace FormsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FormsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FormsClient.Options>;
    constructor(options: FormsClient.Options);
    /**
     * @param {Management.ListFormsRequestParameters} request
     * @param {FormsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.forms.list({
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true,
     *         hydrate: ["flow_count"]
     *     })
     */
    list(request?: Management.ListFormsRequestParameters, requestOptions?: FormsClient.RequestOptions): Promise<core.Page<Management.FormSummary, Management.ListFormsOffsetPaginatedResponseContent>>;
    /**
     * @param {Management.CreateFormRequestContent} request
     * @param {FormsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.forms.create({
     *         name: "name"
     *     })
     */
    create(request: Management.CreateFormRequestContent, requestOptions?: FormsClient.RequestOptions): core.HttpResponsePromise<Management.CreateFormResponseContent>;
    private __create;
    /**
     * @param {string} id - The ID of the form to retrieve.
     * @param {Management.GetFormRequestParameters} request
     * @param {FormsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.forms.get("id", {
     *         hydrate: ["flow_count"]
     *     })
     */
    get(id: string, request?: Management.GetFormRequestParameters, requestOptions?: FormsClient.RequestOptions): core.HttpResponsePromise<Management.GetFormResponseContent>;
    private __get;
    /**
     * @param {string} id - The ID of the form to delete.
     * @param {FormsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.forms.delete("id")
     */
    delete(id: string, requestOptions?: FormsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * @param {string} id - The ID of the form to update.
     * @param {Management.UpdateFormRequestContent} request
     * @param {FormsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.forms.update("id")
     */
    update(id: string, request?: Management.UpdateFormRequestContent, requestOptions?: FormsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateFormResponseContent>;
    private __update;
}
