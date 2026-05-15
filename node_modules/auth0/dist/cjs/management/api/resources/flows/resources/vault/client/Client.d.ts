import type { BaseClientOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { ConnectionsClient } from "../resources/connections/client/Client.js";
export declare namespace VaultClient {
    type Options = BaseClientOptions;
}
export declare class VaultClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VaultClient.Options>;
    protected _connections: ConnectionsClient | undefined;
    constructor(options: VaultClient.Options);
    get connections(): ConnectionsClient;
}
