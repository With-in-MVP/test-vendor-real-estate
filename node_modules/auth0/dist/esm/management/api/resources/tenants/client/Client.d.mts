import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { SettingsClient } from "../resources/settings/client/Client.mjs";
export declare namespace TenantsClient {
    type Options = BaseClientOptions;
}
export declare class TenantsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TenantsClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options: TenantsClient.Options);
    get settings(): SettingsClient;
}
