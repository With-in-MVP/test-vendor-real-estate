import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
export declare namespace SessionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SessionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SessionsClient.Options>;
    constructor(options: SessionsClient.Options);
    /**
     * Retrieve session information.
     *
     * @param {string} id - ID of session to retrieve
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.sessions.get("id")
     */
    get(id: string, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<Management.GetSessionResponseContent>;
    private __get;
    /**
     * Delete a session by ID.
     *
     * @param {string} id - ID of the session to delete.
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.sessions.delete("id")
     */
    delete(id: string, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update session information.
     *
     * @param {string} id - ID of the session to update.
     * @param {Management.UpdateSessionRequestContent} request
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.sessions.update("id")
     */
    update(id: string, request?: Management.UpdateSessionRequestContent, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateSessionResponseContent>;
    private __update;
    /**
     * Revokes a session by ID and all associated refresh tokens.
     *
     * @param {string} id - ID of the session to revoke.
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.sessions.revoke("id")
     */
    revoke(id: string, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __revoke;
}
