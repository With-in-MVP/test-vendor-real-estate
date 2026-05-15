import type { BaseClientOptions } from "../../../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.js";
import { SettingsClient } from "../resources/settings/client/Client.js";
export declare namespace DuoClient {
    type Options = BaseClientOptions;
}
export declare class DuoClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DuoClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options: DuoClient.Options);
    get settings(): SettingsClient;
}
