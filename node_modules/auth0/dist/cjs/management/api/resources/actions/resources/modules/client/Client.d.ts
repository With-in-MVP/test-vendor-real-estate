import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
import { VersionsClient } from "../resources/versions/client/Client.js";
export declare namespace ModulesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ModulesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ModulesClient.Options>;
    protected _versions: VersionsClient | undefined;
    constructor(options: ModulesClient.Options);
    get versions(): VersionsClient;
    /**
     * Retrieve a paginated list of all Actions Modules with optional filtering and totals.
     *
     * @param {Management.GetActionModulesRequestParameters} request
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.list({
     *         page: 1,
     *         per_page: 1
     *     })
     */
    list(request?: Management.GetActionModulesRequestParameters, requestOptions?: ModulesClient.RequestOptions): Promise<core.Page<Management.ActionModuleListItem, Management.GetActionModulesResponseContent>>;
    /**
     * Create a new Actions Module for reusable code across actions.
     *
     * @param {Management.CreateActionModuleRequestContent} request
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.create({
     *         name: "name",
     *         code: "code"
     *     })
     */
    create(request: Management.CreateActionModuleRequestContent, requestOptions?: ModulesClient.RequestOptions): core.HttpResponsePromise<Management.CreateActionModuleResponseContent>;
    private __create;
    /**
     * Retrieve details of a specific Actions Module by its unique identifier.
     *
     * @param {string} id - The ID of the action module to retrieve.
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.get("id")
     */
    get(id: string, requestOptions?: ModulesClient.RequestOptions): core.HttpResponsePromise<Management.GetActionModuleResponseContent>;
    private __get;
    /**
     * Permanently delete an Actions Module. This will fail if the module is still in use by any actions.
     *
     * @param {string} id - The ID of the Actions Module to delete.
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.PreconditionFailedError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.delete("id")
     */
    delete(id: string, requestOptions?: ModulesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update properties of an existing Actions Module, such as code, dependencies, or secrets.
     *
     * @param {string} id - The ID of the action module to update.
     * @param {Management.UpdateActionModuleRequestContent} request
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.update("id")
     */
    update(id: string, request?: Management.UpdateActionModuleRequestContent, requestOptions?: ModulesClient.RequestOptions): core.HttpResponsePromise<Management.UpdateActionModuleResponseContent>;
    private __update;
    /**
     * Lists all actions that are using a specific Actions Module, showing which deployed action versions reference this Actions Module.
     *
     * @param {string} id - The unique ID of the module.
     * @param {Management.GetActionModuleActionsRequestParameters} request
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.listActions("id", {
     *         page: 1,
     *         per_page: 1
     *     })
     */
    listActions(id: string, request?: Management.GetActionModuleActionsRequestParameters, requestOptions?: ModulesClient.RequestOptions): Promise<core.Page<Management.ActionModuleAction, Management.GetActionModuleActionsResponseContent>>;
    /**
     * Rolls back an Actions Module's draft to a previously created version. This action copies the code, dependencies, and secrets from the specified version into the current draft.
     *
     * @param {string} id - The unique ID of the module to roll back.
     * @param {Management.RollbackActionModuleRequestParameters} request
     * @param {ModulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.actions.modules.rollback("id", {
     *         module_version_id: "module_version_id"
     *     })
     */
    rollback(id: string, request: Management.RollbackActionModuleRequestParameters, requestOptions?: ModulesClient.RequestOptions): core.HttpResponsePromise<Management.RollbackActionModuleResponseContent>;
    private __rollback;
}
