import type { BaseClientOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { ProvidersClient } from "../resources/providers/client/Client.js";
import { TemplatesClient } from "../resources/templates/client/Client.js";
export declare namespace PhoneClient {
    type Options = BaseClientOptions;
}
export declare class PhoneClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PhoneClient.Options>;
    protected _providers: ProvidersClient | undefined;
    protected _templates: TemplatesClient | undefined;
    constructor(options: PhoneClient.Options);
    get providers(): ProvidersClient;
    get templates(): TemplatesClient;
}
