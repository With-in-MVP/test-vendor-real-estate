import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
import { CustomTextClient } from "../resources/customText/client/Client.mjs";
import { SsoTicketClient } from "../resources/ssoTicket/client/Client.mjs";
export declare namespace SelfServiceProfilesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SelfServiceProfilesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SelfServiceProfilesClient.Options>;
    protected _customText: CustomTextClient | undefined;
    protected _ssoTicket: SsoTicketClient | undefined;
    constructor(options: SelfServiceProfilesClient.Options);
    get customText(): CustomTextClient;
    get ssoTicket(): SsoTicketClient;
    /**
     * Retrieves self-service profiles.
     *
     * @param {Management.ListSelfServiceProfilesRequestParameters} request
     * @param {SelfServiceProfilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     await client.selfServiceProfiles.list({
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true
     *     })
     */
    list(request?: Management.ListSelfServiceProfilesRequestParameters, requestOptions?: SelfServiceProfilesClient.RequestOptions): Promise<core.Page<Management.SelfServiceProfile, Management.ListSelfServiceProfilesPaginatedResponseContent>>;
    /**
     * Creates a self-service profile.
     *
     * @param {Management.CreateSelfServiceProfileRequestContent} request
     * @param {SelfServiceProfilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     await client.selfServiceProfiles.create({
     *         name: "name"
     *     })
     */
    create(request: Management.CreateSelfServiceProfileRequestContent, requestOptions?: SelfServiceProfilesClient.RequestOptions): core.HttpResponsePromise<Management.CreateSelfServiceProfileResponseContent>;
    private __create;
    /**
     * Retrieves a self-service profile by Id.
     *
     * @param {string} id - The id of the self-service profile to retrieve
     * @param {SelfServiceProfilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     await client.selfServiceProfiles.get("id")
     */
    get(id: string, requestOptions?: SelfServiceProfilesClient.RequestOptions): core.HttpResponsePromise<Management.GetSelfServiceProfileResponseContent>;
    private __get;
    /**
     * Deletes a self-service profile by Id.
     *
     * @param {string} id - The id of the self-service profile to delete
     * @param {SelfServiceProfilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     await client.selfServiceProfiles.delete("id")
     */
    delete(id: string, requestOptions?: SelfServiceProfilesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Updates a self-service profile.
     *
     * @param {string} id - The id of the self-service profile to update
     * @param {Management.UpdateSelfServiceProfileRequestContent} request
     * @param {SelfServiceProfilesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     await client.selfServiceProfiles.update("id")
     */
    update(id: string, request?: Management.UpdateSelfServiceProfileRequestContent, requestOptions?: SelfServiceProfilesClient.RequestOptions): core.HttpResponsePromise<Management.UpdateSelfServiceProfileResponseContent>;
    private __update;
}
