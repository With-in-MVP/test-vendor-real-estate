import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.js";
import * as core from "../../../../../../../../core/index.js";
import * as Management from "../../../../../../../index.js";
export declare namespace SynchronizationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SynchronizationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SynchronizationsClient.Options>;
    constructor(options: SynchronizationsClient.Options);
    /**
     * Request an on-demand synchronization of the directory.
     *
     * @param {string} id - The id of the connection to trigger synchronization for
     * @param {SynchronizationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.connections.directoryProvisioning.synchronizations.create("id")
     */
    create(id: string, requestOptions?: SynchronizationsClient.RequestOptions): core.HttpResponsePromise<Management.CreateDirectorySynchronizationResponseContent>;
    private __create;
}
