import type { BaseClientOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { TemplatesClient } from "../resources/templates/client/Client.js";
export declare namespace VerificationClient {
    type Options = BaseClientOptions;
}
export declare class VerificationClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VerificationClient.Options>;
    protected _templates: TemplatesClient | undefined;
    constructor(options: VerificationClient.Options);
    get templates(): TemplatesClient;
}
