import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import { SettingsClient } from "../resources/settings/client/Client.js";
export declare namespace RiskAssessmentsClient {
    type Options = BaseClientOptions;
}
export declare class RiskAssessmentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RiskAssessmentsClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options: RiskAssessmentsClient.Options);
    get settings(): SettingsClient;
}
