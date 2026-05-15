import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.mjs";
import * as core from "../../../../../../../../core/index.mjs";
import * as Management from "../../../../../../../index.mjs";
export declare namespace VersionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class VersionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VersionsClient.Options>;
    constructor(options: VersionsClient.Options);
    /**
     * List all published versions of a specific Actions Module.
     *
     * @param {string} id - The unique ID of the module.
     * @param {Management.GetActionModuleVersionsRequestParameters} request
     * @param {VersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.versions.list("id", {
     *         page: 1,
     *         per_page: 1
     *     })
     */
    list(id: string, request?: Management.GetActionModuleVersionsRequestParameters, requestOptions?: VersionsClient.RequestOptions): Promise<core.Page<Management.ActionModuleVersion, Management.GetActionModuleVersionsResponseContent>>;
    /**
     * Creates a new immutable version of an Actions Module from the current draft version. This publishes the draft as a new version that can be referenced by actions, while maintaining the existing draft for continued development.
     *
     * @param {string} id - The ID of the action module to create a version for.
     * @param {VersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.PreconditionFailedError}
     *
     * @example
     *     await client.actions.modules.versions.create("id")
     */
    create(id: string, requestOptions?: VersionsClient.RequestOptions): core.HttpResponsePromise<Management.CreateActionModuleVersionResponseContent>;
    private __create;
    /**
     * Retrieve the details of a specific, immutable version of an Actions Module.
     *
     * @param {string} id - The unique ID of the module.
     * @param {string} versionId - The unique ID of the module version to retrieve.
     * @param {VersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.versions.get("id", "versionId")
     */
    get(id: string, versionId: string, requestOptions?: VersionsClient.RequestOptions): core.HttpResponsePromise<Management.GetActionModuleVersionResponseContent>;
    private __get;
}
