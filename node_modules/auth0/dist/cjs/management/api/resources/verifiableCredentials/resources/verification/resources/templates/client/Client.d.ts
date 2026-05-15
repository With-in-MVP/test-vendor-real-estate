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
     * List verifiable credential templates.
     *
     * @param {Management.ListVerifiableCredentialTemplatesRequestParameters} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.verifiableCredentials.verification.templates.list({
     *         from: "from",
     *         take: 1
     *     })
     */
    list(request?: Management.ListVerifiableCredentialTemplatesRequestParameters, requestOptions?: TemplatesClient.RequestOptions): Promise<core.Page<Management.VerifiableCredentialTemplateResponse, Management.ListVerifiableCredentialTemplatesPaginatedResponseContent>>;
    /**
     * Create a verifiable credential template.
     *
     * @param {Management.CreateVerifiableCredentialTemplateRequestContent} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.verifiableCredentials.verification.templates.create({
     *         name: "name",
     *         type: "type",
     *         dialect: "dialect",
     *         presentation: {
     *             "org.iso.18013.5.1.mDL": {
     *                 "org.iso.18013.5.1": {}
     *             }
     *         },
     *         well_known_trusted_issuers: "well_known_trusted_issuers"
     *     })
     */
    create(request: Management.CreateVerifiableCredentialTemplateRequestContent, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.CreateVerifiableCredentialTemplateResponseContent>;
    private __create;
    /**
     * Get a verifiable credential template.
     *
     * @param {string} id - ID of the template to retrieve.
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.verifiableCredentials.verification.templates.get("id")
     */
    get(id: string, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.GetVerifiableCredentialTemplateResponseContent>;
    private __get;
    /**
     * Delete a verifiable credential template.
     *
     * @param {string} id - ID of the template to retrieve.
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.verifiableCredentials.verification.templates.delete("id")
     */
    delete(id: string, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update a verifiable credential template.
     *
     * @param {string} id - ID of the template to retrieve.
     * @param {Management.UpdateVerifiableCredentialTemplateRequestContent} request
     * @param {TemplatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.verifiableCredentials.verification.templates.update("id")
     */
    update(id: string, request?: Management.UpdateVerifiableCredentialTemplateRequestContent, requestOptions?: TemplatesClient.RequestOptions): core.HttpResponsePromise<Management.UpdateVerifiableCredentialTemplateResponseContent>;
    private __update;
}
