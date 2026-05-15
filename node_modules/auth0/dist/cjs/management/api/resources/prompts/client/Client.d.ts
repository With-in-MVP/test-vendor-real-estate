import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Management from "../../../index.js";
import { CustomTextClient } from "../resources/customText/client/Client.js";
import { PartialsClient } from "../resources/partials/client/Client.js";
import { RenderingClient } from "../resources/rendering/client/Client.js";
export declare namespace PromptsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PromptsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PromptsClient.Options>;
    protected _rendering: RenderingClient | undefined;
    protected _customText: CustomTextClient | undefined;
    protected _partials: PartialsClient | undefined;
    constructor(options: PromptsClient.Options);
    get rendering(): RenderingClient;
    get customText(): CustomTextClient;
    get partials(): PartialsClient;
    /**
     * Retrieve details of the Universal Login configuration of your tenant. This includes the <a href="https://auth0.com/docs/authenticate/login/auth0-universal-login/identifier-first">Identifier First Authentication</a> and <a href="https://auth0.com/docs/secure/multi-factor-authentication/fido-authentication-with-webauthn/configure-webauthn-device-biometrics-for-mfa">WebAuthn with Device Biometrics for MFA</a> features.
     *
     * @param {PromptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.prompts.getSettings()
     */
    getSettings(requestOptions?: PromptsClient.RequestOptions): core.HttpResponsePromise<Management.GetSettingsResponseContent>;
    private __getSettings;
    /**
     * Update the Universal Login configuration of your tenant. This includes the <a href="https://auth0.com/docs/authenticate/login/auth0-universal-login/identifier-first">Identifier First Authentication</a> and <a href="https://auth0.com/docs/secure/multi-factor-authentication/fido-authentication-with-webauthn/configure-webauthn-device-biometrics-for-mfa">WebAuthn with Device Biometrics for MFA</a> features.
     *
     * @param {Management.UpdateSettingsRequestContent} request
     * @param {PromptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.prompts.updateSettings()
     */
    updateSettings(request?: Management.UpdateSettingsRequestContent, requestOptions?: PromptsClient.RequestOptions): core.HttpResponsePromise<Management.UpdateSettingsResponseContent>;
    private __updateSettings;
}
