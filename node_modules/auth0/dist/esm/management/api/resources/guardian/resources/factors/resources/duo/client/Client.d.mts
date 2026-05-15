import type { BaseClientOptions } from "../../../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../../../BaseClient.mjs";
import { SettingsClient } from "../resources/settings/client/Client.mjs";
export declare namespace DuoClient {
    type Options = BaseClientOptions;
}
export declare class DuoClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DuoClient.Options>;
    protected _settings: SettingsClient | undefined;
    constructor(options: DuoClient.Options);
    get settings(): SettingsClient;
}
