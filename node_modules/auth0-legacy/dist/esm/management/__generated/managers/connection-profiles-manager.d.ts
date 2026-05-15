import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { CreateConnectionProfileRequestContent, CreateConnectionProfileResponseContent, GetConnectionProfileResponseContent, GetConnectionProfileTemplateResponseContent, ListConnectionProfileTemplateResponseContent, ListConnectionProfilesPaginatedResponseContent, UpdateConnectionProfileRequestContent, UpdateConnectionProfileResponseContent, DeleteConnectionProfilesByIdRequest, GetConnectionProfileTemplateRequest, GetConnectionProfilesRequest, GetConnectionProfilesByIdRequest, PatchConnectionProfilesByIdRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class ConnectionProfilesManager extends BaseAPI {
    /**
     * Delete a single Connection Profile specified by ID.
     *
     * Delete Connection Profile
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteConnectionProfilesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve a Connection Profile Template.
     *
     * Get Connection Profile Template
     *
     * @throws {RequiredError}
     */
    getTemplate(requestParameters: GetConnectionProfileTemplateRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetConnectionProfileTemplateResponseContent>>;
    /**
     * Retrieve a list of Connection Profile Templates.
     *
     * Get Connection Profile Templates
     *
     * @throws {RequiredError}
     */
    getAllTemplates(initOverrides?: InitOverride): Promise<ApiResponse<ListConnectionProfileTemplateResponseContent>>;
    /**
     * Retrieve a list of Connection Profiles. This endpoint supports Checkpoint pagination.
     *
     * Get Connection Profiles
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters?: GetConnectionProfilesRequest, initOverrides?: InitOverride): Promise<ApiResponse<ListConnectionProfilesPaginatedResponseContent>>;
    /**
     * Retrieve details about a single Connection Profile specified by ID.
     *
     * Get Connection Profile
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetConnectionProfilesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetConnectionProfileResponseContent>>;
    /**
     * Update the details of a specific Connection Profile.
     *
     * Modify a Connection Profile
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PatchConnectionProfilesByIdRequest, bodyParameters: UpdateConnectionProfileRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdateConnectionProfileResponseContent>>;
    /**
     * Create a Connection Profile.
     *
     * Create a connection profile
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: CreateConnectionProfileRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<CreateConnectionProfileResponseContent>>;
}
export {};
