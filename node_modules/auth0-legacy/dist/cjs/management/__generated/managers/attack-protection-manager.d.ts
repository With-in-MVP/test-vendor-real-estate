import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetAttackProtectionCaptchaResponseContent, GetBotDetectionSettingsResponseContent, GetBreachedPasswordDetection200Response, GetBruteForceProtection200Response, GetSuspiciousIpThrottling200Response, PatchBreachedPasswordDetectionRequest, PatchBruteForceProtectionRequest, PatchSuspiciousIpThrottlingRequest, UpdateBotDetectionSettingsRequestContent, UpdateBotDetectionSettingsResponseContent, UpdateCaptchaRequestContent, UpdateCaptchaResponseContent } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class AttackProtectionManager extends BaseAPI {
    /**
     * Get the Bot Detection configuration of your tenant.
     * Get Bot Detection settings
     *
     * @throws {RequiredError}
     */
    getBotDetectionConfig(initOverrides?: InitOverride): Promise<ApiResponse<GetBotDetectionSettingsResponseContent>>;
    /**
     * Retrieve details of the Breached Password Detection configuration of your tenant.
     * Get Breached Password Detection settings
     *
     * @throws {RequiredError}
     */
    getBreachedPasswordDetectionConfig(initOverrides?: InitOverride): Promise<ApiResponse<GetBreachedPasswordDetection200Response>>;
    /**
     * Get the brute force configuration
     *
     * @throws {RequiredError}
     */
    getBruteForceConfig(initOverrides?: InitOverride): Promise<ApiResponse<GetBruteForceProtection200Response>>;
    /**
     * Get the CAPTCHA configuration for your client.
     * Get the CAPTCHA configuration for a tenant
     *
     * @throws {RequiredError}
     */
    getCaptchaConfig(initOverrides?: InitOverride): Promise<ApiResponse<GetAttackProtectionCaptchaResponseContent>>;
    /**
     * Get the suspicious IP throttling configuration
     *
     * @throws {RequiredError}
     */
    getSuspiciousIpThrottlingConfig(initOverrides?: InitOverride): Promise<ApiResponse<GetSuspiciousIpThrottling200Response>>;
    /**
     * Update the Bot Detection configuration of your tenant.
     * Update Bot Detection settings
     *
     * @throws {RequiredError}
     */
    updateBotDetectionConfig(bodyParameters: UpdateBotDetectionSettingsRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdateBotDetectionSettingsResponseContent>>;
    /**
     * Update details of the Breached Password Detection configuration of your tenant.
     * Update Breached Password Detection settings
     *
     * @throws {RequiredError}
     */
    updateBreachedPasswordDetectionConfig(bodyParameters: PatchBreachedPasswordDetectionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBreachedPasswordDetection200Response>>;
    /**
     * Update the brute force configuration
     *
     * @throws {RequiredError}
     */
    updateBruteForceConfig(bodyParameters: PatchBruteForceProtectionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBruteForceProtection200Response>>;
    /**
     * Update existing CAPTCHA configuration for your client.
     * Partial Update for CAPTCHA Configuration
     *
     * @throws {RequiredError}
     */
    updateCaptchaConfig(bodyParameters: UpdateCaptchaRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdateCaptchaResponseContent>>;
    /**
     * Update the suspicious IP throttling configuration
     *
     * @throws {RequiredError}
     */
    updateSuspiciousIpThrottlingConfig(bodyParameters: PatchSuspiciousIpThrottlingRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetSuspiciousIpThrottling200Response>>;
}
export {};
