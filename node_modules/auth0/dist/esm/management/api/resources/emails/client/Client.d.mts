import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { ProviderClient } from "../resources/provider/client/Client.mjs";
export declare namespace EmailsClient {
    type Options = BaseClientOptions;
}
export declare class EmailsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EmailsClient.Options>;
    protected _provider: ProviderClient | undefined;
    constructor(options: EmailsClient.Options);
    get provider(): ProviderClient;
}
