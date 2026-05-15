import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace VersionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class VersionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VersionsClient.Options>;
    constructor(options: VersionsClient.Options);
    /**
     * Retrieve all of an action's versions. An action version is created whenever an action is deployed. An action version is immutable, once created.
     *
     * @param {string} actionId - The ID of the action.
     * @param {Management.ListActionVersionsRequestParameters} request
     * @param {VersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.versions.list("actionId", {
     *         page: 1,
     *         per_page: 1
     *     })
     */
    list(actionId: string, request?: Management.ListActionVersionsRequestParameters, requestOptions?: VersionsClient.RequestOptions): Promise<core.Page<Management.ActionVersion, Management.ListActionVersionsPaginatedResponseContent>>;
    /**
     * Retrieve a specific version of an action. An action version is created whenever an action is deployed. An action version is immutable, once created.
     *
     * @param {string} actionId - The ID of the action.
     * @param {string} id - The ID of the action version.
     * @param {VersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.versions.get("actionId", "id")
     */
    get(actionId: string, id: string, requestOptions?: VersionsClient.RequestOptions): core.HttpResponsePromise<Management.GetActionVersionResponseContent>;
    private __get;
    /**
     * Performs the equivalent of a roll-back of an action to an earlier, specified version. Creates a new, deployed action version that is identical to the specified version. If this action is currently bound to a trigger, the system will begin executing the newly-created version immediately.
     *
     * @param {string} actionId - The ID of an action.
     * @param {string} id - The ID of an action version.
     * @param {Management.DeployActionVersionRequestContent | null} request
     * @param {VersionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.versions.deploy("actionId", "id")
     */
    deploy(actionId: string, id: string, request?: Management.DeployActionVersionRequestContent | null, requestOptions?: VersionsClient.RequestOptions): core.HttpResponsePromise<Management.DeployActionVersionResponseContent>;
    private __deploy;
}
