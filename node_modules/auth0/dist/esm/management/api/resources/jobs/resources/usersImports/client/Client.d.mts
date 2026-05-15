import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace UsersImportsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UsersImportsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UsersImportsClient.Options>;
    constructor(options: UsersImportsClient.Options);
    /**
     * Import users from a <a href="https://auth0.com/docs/users/references/bulk-import-database-schema-examples">formatted file</a> into a connection via a long-running job. When importing users, with or without upsert, the `email_verified` is set to `false` when the email address is added or updated. Users must verify their email address. To avoid this behavior, set `email_verified` to `true` in the imported data.
     *
     * @param {Management.CreateImportUsersRequestContent} request
     * @param {UsersImportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ContentTooLargeError}
     * @throws {@link Management.TooManyRequestsError}
     * @throws {@link Management.InternalServerError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.jobs.usersImports.create({
     *         users: fs.createReadStream("/path/to/your/file"),
     *         connection_id: "connection_id"
     *     })
     */
    create(request: Management.CreateImportUsersRequestContent, requestOptions?: UsersImportsClient.RequestOptions): core.HttpResponsePromise<Management.CreateImportUsersResponseContent>;
    private __create;
}
