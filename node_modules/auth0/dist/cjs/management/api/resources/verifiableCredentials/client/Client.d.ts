import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import { VerificationClient } from "../resources/verification/client/Client.js";
export declare namespace VerifiableCredentialsClient {
    type Options = BaseClientOptions;
}
export declare class VerifiableCredentialsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VerifiableCredentialsClient.Options>;
    protected _verification: VerificationClient | undefined;
    constructor(options: VerifiableCredentialsClient.Options);
    get verification(): VerificationClient;
}
