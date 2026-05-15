import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace RefreshTokenClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class RefreshTokenClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RefreshTokenClient.Options>;
    constructor(options: RefreshTokenClient.Options);
    /**
     * Retrieve details for a user's refresh tokens.
     *
     * @param {string} user_id - ID of the user to get refresh tokens for
     * @param {Management.ListRefreshTokensRequestParameters} request
     * @param {RefreshTokenClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.refreshToken.list("user_id", {
     *         from: "from",
     *         take: 1
     *     })
     */
    list(user_id: string, request?: Management.ListRefreshTokensRequestParameters, requestOptions?: RefreshTokenClient.RequestOptions): Promise<core.Page<Management.RefreshTokenResponseContent, Management.ListRefreshTokensPaginatedResponseContent>>;
    /**
     * Delete all refresh tokens for a user.
     *
     * @param {string} user_id - ID of the user to get remove refresh tokens for
     * @param {RefreshTokenClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.refreshToken.delete("user_id")
     */
    delete(user_id: string, requestOptions?: RefreshTokenClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
}
