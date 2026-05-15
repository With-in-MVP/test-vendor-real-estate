import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace SessionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SessionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SessionsClient.Options>;
    constructor(options: SessionsClient.Options);
    /**
     * Retrieve details for a user's sessions.
     *
     * @param {string} user_id - ID of the user to get sessions for
     * @param {Management.ListUserSessionsRequestParameters} request
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.sessions.list("user_id", {
     *         from: "from",
     *         take: 1
     *     })
     */
    list(user_id: string, request?: Management.ListUserSessionsRequestParameters, requestOptions?: SessionsClient.RequestOptions): Promise<core.Page<Management.SessionResponseContent, Management.ListUserSessionsPaginatedResponseContent>>;
    /**
     * Delete all sessions for a user.
     *
     * @param {string} user_id - ID of the user to get sessions for
     * @param {SessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.sessions.delete("user_id")
     */
    delete(user_id: string, requestOptions?: SessionsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
}
