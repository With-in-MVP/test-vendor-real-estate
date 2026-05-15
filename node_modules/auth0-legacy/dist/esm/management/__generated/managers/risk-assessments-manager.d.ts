import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetRiskAssessmentsSettingsNewDeviceResponseContent, GetRiskAssessmentsSettingsResponseContent, UpdateRiskAssessmentsSettingsNewDeviceRequestContent, UpdateRiskAssessmentsSettingsNewDeviceResponseContent, UpdateRiskAssessmentsSettingsRequestContent, UpdateRiskAssessmentsSettingsResponseContent } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class RiskAssessmentsManager extends BaseAPI {
    /**
     * Gets the risk assessment settings for the new device assessor
     *
     * @throws {RequiredError}
     */
    getNewDeviceSettings(initOverrides?: InitOverride): Promise<ApiResponse<GetRiskAssessmentsSettingsNewDeviceResponseContent>>;
    /**
     * Gets the tenant settings for risk assessments
     * Get risk assessment settings
     *
     * @throws {RequiredError}
     */
    getSettings(initOverrides?: InitOverride): Promise<ApiResponse<GetRiskAssessmentsSettingsResponseContent>>;
    /**
     * Updates the risk assessment settings for the new device assessor
     *
     * @throws {RequiredError}
     */
    updateNewDeviceSettings(bodyParameters: UpdateRiskAssessmentsSettingsNewDeviceRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdateRiskAssessmentsSettingsNewDeviceResponseContent>>;
    /**
     * Updates the tenant settings for risk assessments
     * Updates risk assessment settings
     *
     * @throws {RequiredError}
     */
    updateSettings(bodyParameters: UpdateRiskAssessmentsSettingsRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdateRiskAssessmentsSettingsResponseContent>>;
}
export {};
