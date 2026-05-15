import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { BlocksClient } from "../resources/blocks/client/Client.mjs";
export declare namespace AnomalyClient {
    type Options = BaseClientOptions;
}
export declare class AnomalyClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AnomalyClient.Options>;
    protected _blocks: BlocksClient | undefined;
    constructor(options: AnomalyClient.Options);
    get blocks(): BlocksClient;
}
