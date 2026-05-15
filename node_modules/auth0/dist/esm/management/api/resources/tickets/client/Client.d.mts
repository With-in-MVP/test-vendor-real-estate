import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
export declare namespace TicketsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TicketsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TicketsClient.Options>;
    constructor(options: TicketsClient.Options);
    /**
     * Create an email verification ticket for a given user. An email verification ticket is a generated URL that the user can consume to verify their email address.
     *
     * @param {Management.VerifyEmailTicketRequestContent} request
     * @param {TicketsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.tickets.verifyEmail({
     *         user_id: "user_id"
     *     })
     */
    verifyEmail(request: Management.VerifyEmailTicketRequestContent, requestOptions?: TicketsClient.RequestOptions): core.HttpResponsePromise<Management.VerifyEmailTicketResponseContent>;
    private __verifyEmail;
    /**
     * Create a password change ticket for a given user. A password change ticket is a generated URL that the user can consume to start a reset password flow.
     *
     * Note: This endpoint does not verify the given user’s identity. If you call this endpoint within your application, you must design your application to verify the user’s identity.
     *
     * @param {Management.ChangePasswordTicketRequestContent} request
     * @param {TicketsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.tickets.changePassword()
     */
    changePassword(request?: Management.ChangePasswordTicketRequestContent, requestOptions?: TicketsClient.RequestOptions): core.HttpResponsePromise<Management.ChangePasswordTicketResponseContent>;
    private __changePassword;
}
