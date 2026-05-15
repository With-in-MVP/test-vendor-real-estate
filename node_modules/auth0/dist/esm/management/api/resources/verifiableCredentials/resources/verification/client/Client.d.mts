import type { BaseClientOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import { TemplatesClient } from "../resources/templates/client/Client.mjs";
export declare namespace VerificationClient {
    type Options = BaseClientOptions;
}
export declare class VerificationClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VerificationClient.Options>;
    protected _templates: TemplatesClient | undefined;
    constructor(options: VerificationClient.Options);
    get templates(): TemplatesClient;
}
