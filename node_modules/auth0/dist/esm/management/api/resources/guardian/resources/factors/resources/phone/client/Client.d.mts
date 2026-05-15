import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.mjs";
import * as core from "../../../../../../../../core/index.mjs";
import * as Management from "../../../../../../../index.mjs";
export declare namespace PhoneClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PhoneClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PhoneClient.Options>;
    constructor(options: PhoneClient.Options);
    /**
     * Retrieve list of <a href="https://auth0.com/docs/secure/multi-factor-authentication/multi-factor-authentication-factors/configure-sms-voice-notifications-mfa">phone-type MFA factors</a> (i.e., sms and voice) that are enabled for your tenant.
     *
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.getMessageTypes()
     */
    getMessageTypes(requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.GetGuardianFactorPhoneMessageTypesResponseContent>;
    private __getMessageTypes;
    /**
     * Replace the list of <a href="https://auth0.com/docs/secure/multi-factor-authentication/multi-factor-authentication-factors/configure-sms-voice-notifications-mfa">phone-type MFA factors</a> (i.e., sms and voice) that are enabled for your tenant.
     *
     * @param {Management.SetGuardianFactorPhoneMessageTypesRequestContent} request
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     *
     * @example
     *     await client.guardian.factors.phone.setMessageTypes({
     *         message_types: ["sms"]
     *     })
     */
    setMessageTypes(request: Management.SetGuardianFactorPhoneMessageTypesRequestContent, requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.SetGuardianFactorPhoneMessageTypesResponseContent>;
    private __setMessageTypes;
    /**
     * Retrieve configuration details for a Twilio phone provider that has been set up in your tenant. To learn more, review <a href="https://auth0.com/docs/secure/multi-factor-authentication/multi-factor-authentication-factors/configure-sms-voice-notifications-mfa">Configure SMS and Voice Notifications for MFA</a>.
     *
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.getTwilioProvider()
     */
    getTwilioProvider(requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.GetGuardianFactorsProviderPhoneTwilioResponseContent>;
    private __getTwilioProvider;
    /**
     * Update the configuration of a Twilio phone provider that has been set up in your tenant. To learn more, review <a href="https://auth0.com/docs/secure/multi-factor-authentication/multi-factor-authentication-factors/configure-sms-voice-notifications-mfa">Configure SMS and Voice Notifications for MFA</a>.
     *
     * @param {Management.SetGuardianFactorsProviderPhoneTwilioRequestContent} request
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.setTwilioProvider()
     */
    setTwilioProvider(request?: Management.SetGuardianFactorsProviderPhoneTwilioRequestContent, requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.SetGuardianFactorsProviderPhoneTwilioResponseContent>;
    private __setTwilioProvider;
    /**
     * Retrieve details of the multi-factor authentication phone provider configured for your tenant.
     *
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.getSelectedProvider()
     */
    getSelectedProvider(requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.GetGuardianFactorsProviderPhoneResponseContent>;
    private __getSelectedProvider;
    /**
     * @param {Management.SetGuardianFactorsProviderPhoneRequestContent} request
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.setProvider({
     *         provider: "auth0"
     *     })
     */
    setProvider(request: Management.SetGuardianFactorsProviderPhoneRequestContent, requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.SetGuardianFactorsProviderPhoneResponseContent>;
    private __setProvider;
    /**
     * Retrieve details of the multi-factor authentication enrollment and verification templates for phone-type factors available in your tenant.
     *
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.getTemplates()
     */
    getTemplates(requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.GetGuardianFactorPhoneTemplatesResponseContent>;
    private __getTemplates;
    /**
     * Customize the messages sent to complete phone enrollment and verification (subscription required).
     *
     * @param {Management.SetGuardianFactorPhoneTemplatesRequestContent} request
     * @param {PhoneClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.phone.setTemplates({
     *         enrollment_message: "enrollment_message",
     *         verification_message: "verification_message"
     *     })
     */
    setTemplates(request: Management.SetGuardianFactorPhoneTemplatesRequestContent, requestOptions?: PhoneClient.RequestOptions): core.HttpResponsePromise<Management.SetGuardianFactorPhoneTemplatesResponseContent>;
    private __setTemplates;
}
