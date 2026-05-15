import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import { ProviderClient } from "../resources/provider/client/Client.js";
export declare namespace EmailsClient {
    type Options = BaseClientOptions;
}
export declare class EmailsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EmailsClient.Options>;
    protected _provider: ProviderClient | undefined;
    constructor(options: EmailsClient.Options);
    get provider(): ProviderClient;
}
