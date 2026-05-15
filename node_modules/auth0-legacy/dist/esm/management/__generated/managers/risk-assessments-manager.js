import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class RiskAssessmentsManager extends BaseAPI {
    /**
     * Gets the risk assessment settings for the new device assessor
     *
     * @throws {RequiredError}
     */
    async getNewDeviceSettings(initOverrides) {
        const response = await this.request({
            path: `/risk-assessments/settings/new-device`,
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Gets the tenant settings for risk assessments
     * Get risk assessment settings
     *
     * @throws {RequiredError}
     */
    async getSettings(initOverrides) {
        const response = await this.request({
            path: `/risk-assessments/settings`,
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Updates the risk assessment settings for the new device assessor
     *
     * @throws {RequiredError}
     */
    async updateNewDeviceSettings(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/risk-assessments/settings/new-device`,
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Updates the tenant settings for risk assessments
     * Updates risk assessment settings
     *
     * @throws {RequiredError}
     */
    async updateSettings(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/risk-assessments/settings`,
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=risk-assessments-manager.js.map