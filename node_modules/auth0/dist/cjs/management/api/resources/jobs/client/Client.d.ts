import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Management from "../../../index.js";
import { ErrorsClient } from "../resources/errors/client/Client.js";
import { UsersExportsClient } from "../resources/usersExports/client/Client.js";
import { UsersImportsClient } from "../resources/usersImports/client/Client.js";
import { VerificationEmailClient } from "../resources/verificationEmail/client/Client.js";
export declare namespace JobsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class JobsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<JobsClient.Options>;
    protected _usersExports: UsersExportsClient | undefined;
    protected _usersImports: UsersImportsClient | undefined;
    protected _verificationEmail: VerificationEmailClient | undefined;
    protected _errors: ErrorsClient | undefined;
    constructor(options: JobsClient.Options);
    get usersExports(): UsersExportsClient;
    get usersImports(): UsersImportsClient;
    get verificationEmail(): VerificationEmailClient;
    get errors(): ErrorsClient;
    /**
     * Retrieves a job. Useful to check its status.
     *
     * @param {string} id - ID of the job.
     * @param {JobsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.jobs.get("id")
     */
    get(id: string, requestOptions?: JobsClient.RequestOptions): core.HttpResponsePromise<Management.GetJobResponseContent>;
    private __get;
}
