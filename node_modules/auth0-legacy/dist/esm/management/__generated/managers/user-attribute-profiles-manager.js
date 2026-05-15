import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class UserAttributeProfilesManager extends BaseAPI {
    /**
     * Delete a single User Attribute Profile specified by ID.
     *
     * Delete User Attribute Profile
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/user-attribute-profiles/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a User Attribute Profile Template.
     *
     * Get User Attribute Profile Template
     *
     * @throws {RequiredError}
     */
    async getTemplate(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/user-attribute-profiles/templates/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a list of User Attribute Profile Templates.
     *
     * Get User Attribute Profile Templates
     *
     * @throws {RequiredError}
     */
    async getAllTemplates(initOverrides) {
        const response = await this.request({
            path: `/user-attribute-profiles/templates`,
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a list of User Attribute Profiles. This endpoint supports Checkpoint pagination.
     *
     * Get User Attribute Profiles
     *
     * @throws {RequiredError}
     */
    async getAll(requestParameters = {}, initOverrides) {
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'from',
                config: {},
            },
            {
                key: 'take',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/user-attribute-profiles`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve details about a single User Attribute Profile specified by ID.
     * Get User Attribute Profile
     *
     * @throws {RequiredError}
     */
    async get(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/user-attribute-profiles/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Update the details of a specific User attribute profile, such as name, user_id and user_attributes.
     *
     * Modify a user attribute profile
     *
     * @throws {RequiredError}
     */
    async update(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/user-attribute-profiles/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve details about a single User Attribute Profile specified by ID.
     * Post User Attribute Profile
     *
     * @throws {RequiredError}
     */
    async create(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/user-attribute-profiles`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=user-attribute-profiles-manager.js.map