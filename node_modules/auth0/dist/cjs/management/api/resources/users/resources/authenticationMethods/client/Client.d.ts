import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace AuthenticationMethodsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AuthenticationMethodsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AuthenticationMethodsClient.Options>;
    constructor(options: AuthenticationMethodsClient.Options);
    /**
     * Retrieve detailed list of authentication methods associated with a specified user.
     *
     * @param {string} id - The ID of the user in question.
     * @param {Management.ListUserAuthenticationMethodsRequestParameters} request
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.list("id", {
     *         page: 1,
     *         per_page: 1,
     *         include_totals: true
     *     })
     */
    list(id: string, request?: Management.ListUserAuthenticationMethodsRequestParameters, requestOptions?: AuthenticationMethodsClient.RequestOptions): Promise<core.Page<Management.UserAuthenticationMethod, Management.ListUserAuthenticationMethodsOffsetPaginatedResponseContent>>;
    /**
     * Create an authentication method. Authentication methods created via this endpoint will be auto confirmed and should already have verification completed.
     *
     * @param {string} id - The ID of the user to whom the new authentication method will be assigned.
     * @param {Management.CreateUserAuthenticationMethodRequestContent} request
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.create("id", {
     *         type: "phone"
     *     })
     */
    create(id: string, request: Management.CreateUserAuthenticationMethodRequestContent, requestOptions?: AuthenticationMethodsClient.RequestOptions): core.HttpResponsePromise<Management.CreateUserAuthenticationMethodResponseContent>;
    private __create;
    /**
     * Replace the specified user <a href="https://auth0.com/docs/secure/multi-factor-authentication/multi-factor-authentication-factors"> authentication methods</a> with supplied values.
     *
     *     <b>Note</b>: Authentication methods supplied through this action do not iterate on existing methods. Instead, any methods passed will overwrite the user&#8217s existing settings.
     *
     * @param {string} id - The ID of the user in question.
     * @param {Management.SetUserAuthenticationMethodsRequestContent} request
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.set("id", [{
     *             type: "phone"
     *         }])
     */
    set(id: string, request: Management.SetUserAuthenticationMethodsRequestContent, requestOptions?: AuthenticationMethodsClient.RequestOptions): core.HttpResponsePromise<Management.SetUserAuthenticationMethodResponseContent[]>;
    private __set;
    /**
     * Remove all authentication methods (i.e., enrolled MFA factors) from the specified user account. This action cannot be undone.
     *
     * @param {string} id - The ID of the user in question.
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.deleteAll("id")
     */
    deleteAll(id: string, requestOptions?: AuthenticationMethodsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteAll;
    /**
     * @param {string} id - The ID of the user in question.
     * @param {string} authentication_method_id - The ID of the authentication methods in question.
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.get("id", "authentication_method_id")
     */
    get(id: string, authentication_method_id: string, requestOptions?: AuthenticationMethodsClient.RequestOptions): core.HttpResponsePromise<Management.GetUserAuthenticationMethodResponseContent>;
    private __get;
    /**
     * Remove the authentication method with the given ID from the specified user. For more information, review <a href="https://auth0.com/docs/secure/multi-factor-authentication/manage-mfa-auth0-apis/manage-authentication-methods-with-management-api">Manage Authentication Methods with Management API</a>.
     *
     * @param {string} id - The ID of the user in question.
     * @param {string} authentication_method_id - The ID of the authentication method to delete.
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.delete("id", "authentication_method_id")
     */
    delete(id: string, authentication_method_id: string, requestOptions?: AuthenticationMethodsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Modify the authentication method with the given ID from the specified user. For more information, review <a href="https://auth0.com/docs/secure/multi-factor-authentication/manage-mfa-auth0-apis/manage-authentication-methods-with-management-api">Manage Authentication Methods with Management API</a>.
     *
     * @param {string} id - The ID of the user in question.
     * @param {string} authentication_method_id - The ID of the authentication method to update.
     * @param {Management.UpdateUserAuthenticationMethodRequestContent} request
     * @param {AuthenticationMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.authenticationMethods.update("id", "authentication_method_id")
     */
    update(id: string, authentication_method_id: string, request?: Management.UpdateUserAuthenticationMethodRequestContent, requestOptions?: AuthenticationMethodsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateUserAuthenticationMethodResponseContent>;
    private __update;
}
