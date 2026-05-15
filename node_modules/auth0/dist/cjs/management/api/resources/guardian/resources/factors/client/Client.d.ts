import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
import { DuoClient } from "../resources/duo/client/Client.js";
import { PhoneClient } from "../resources/phone/client/Client.js";
import { PushNotificationClient } from "../resources/pushNotification/client/Client.js";
import { SmsClient } from "../resources/sms/client/Client.js";
export declare namespace FactorsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FactorsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FactorsClient.Options>;
    protected _phone: PhoneClient | undefined;
    protected _pushNotification: PushNotificationClient | undefined;
    protected _sms: SmsClient | undefined;
    protected _duo: DuoClient | undefined;
    constructor(options: FactorsClient.Options);
    get phone(): PhoneClient;
    get pushNotification(): PushNotificationClient;
    get sms(): SmsClient;
    get duo(): DuoClient;
    /**
     * Retrieve details of all <a href="https://auth0.com/docs/secure/multi-factor-authentication/multi-factor-authentication-factors">multi-factor authentication factors</a> associated with your tenant.
     *
     * @param {FactorsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.list()
     */
    list(requestOptions?: FactorsClient.RequestOptions): core.HttpResponsePromise<Management.GuardianFactor[]>;
    private __list;
    /**
     * Update the status (i.e., enabled or disabled) of a specific multi-factor authentication factor.
     *
     * @param {Management.GuardianFactorNameEnum} name - Factor name. Can be `sms`, `push-notification`, `email`, `duo` `otp` `webauthn-roaming`, `webauthn-platform`, or `recovery-code`.
     * @param {Management.SetGuardianFactorRequestContent} request
     * @param {FactorsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     *
     * @example
     *     await client.guardian.factors.set("push-notification", {
     *         enabled: true
     *     })
     */
    set(name: Management.GuardianFactorNameEnum, request: Management.SetGuardianFactorRequestContent, requestOptions?: FactorsClient.RequestOptions): core.HttpResponsePromise<Management.SetGuardianFactorResponseContent>;
    private __set;
}
