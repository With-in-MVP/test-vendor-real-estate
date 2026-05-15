import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { SettingsClient } from "../resources/settings/client/Client.mjs";
export declare namespace RiskAssessmentsClient {
    type Options = BaseClientOptions;
}
export declare class RiskAssessmentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RiskAssessmentsClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options: RiskAssessmentsClient.Options);
    get settings(): SettingsClient;
}
