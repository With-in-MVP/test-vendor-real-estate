import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace UsersExportsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UsersExportsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UsersExportsClient.Options>;
    constructor(options: UsersExportsClient.Options);
    /**
     * Export all users to a file via a long-running job.
     *
     * @param {Management.CreateExportUsersRequestContent} request
     * @param {UsersExportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.jobs.usersExports.create()
     */
    create(request?: Management.CreateExportUsersRequestContent, requestOptions?: UsersExportsClient.RequestOptions): core.HttpResponsePromise<Management.CreateExportUsersResponseContent>;
    private __create;
}
