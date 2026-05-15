import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import { SettingsClient } from "../resources/settings/client/Client.js";
export declare namespace TenantsClient {
    type Options = BaseClientOptions;
}
export declare class TenantsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TenantsClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options: TenantsClient.Options);
    get settings(): SettingsClient;
}
