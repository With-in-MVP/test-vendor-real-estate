import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { CreateUserAttributeProfileRequestContent, CreateUserAttributeProfileResponseContent, GetUserAttributeProfileResponseContent, GetUserAttributeProfileTemplateResponseContent, ListUserAttributeProfileTemplateResponseContent, ListUserAttributeProfilesPaginatedResponseContent, UpdateUserAttributeProfileRequestContent, UpdateUserAttributeProfileResponseContent, DeleteUserAttributeProfilesByIdRequest, GetUserAttributeProfileTemplateRequest, GetUserAttributeProfilesRequest, GetUserAttributeProfilesByIdRequest, PatchUserAttributeProfilesByIdRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class UserAttributeProfilesManager extends BaseAPI {
    /**
     * Delete a single User Attribute Profile specified by ID.
     *
     * Delete User Attribute Profile
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteUserAttributeProfilesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve a User Attribute Profile Template.
     *
     * Get User Attribute Profile Template
     *
     * @throws {RequiredError}
     */
    getTemplate(requestParameters: GetUserAttributeProfileTemplateRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetUserAttributeProfileTemplateResponseContent>>;
    /**
     * Retrieve a list of User Attribute Profile Templates.
     *
     * Get User Attribute Profile Templates
     *
     * @throws {RequiredError}
     */
    getAllTemplates(initOverrides?: InitOverride): Promise<ApiResponse<ListUserAttributeProfileTemplateResponseContent>>;
    /**
     * Retrieve a list of User Attribute Profiles. This endpoint supports Checkpoint pagination.
     *
     * Get User Attribute Profiles
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters?: GetUserAttributeProfilesRequest, initOverrides?: InitOverride): Promise<ApiResponse<ListUserAttributeProfilesPaginatedResponseContent>>;
    /**
     * Retrieve details about a single User Attribute Profile specified by ID.
     * Get User Attribute Profile
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetUserAttributeProfilesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetUserAttributeProfileResponseContent>>;
    /**
     * Update the details of a specific User attribute profile, such as name, user_id and user_attributes.
     *
     * Modify a user attribute profile
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PatchUserAttributeProfilesByIdRequest, bodyParameters: UpdateUserAttributeProfileRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdateUserAttributeProfileResponseContent>>;
    /**
     * Retrieve details about a single User Attribute Profile specified by ID.
     * Post User Attribute Profile
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: CreateUserAttributeProfileRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<CreateUserAttributeProfileResponseContent>>;
}
export {};
