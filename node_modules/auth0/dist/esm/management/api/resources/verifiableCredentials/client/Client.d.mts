import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { VerificationClient } from "../resources/verification/client/Client.mjs";
export declare namespace VerifiableCredentialsClient {
    type Options = BaseClientOptions;
}
export declare class VerifiableCredentialsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VerifiableCredentialsClient.Options>;
    protected _verification: VerificationClient | undefined;
    constructor(options: VerifiableCredentialsClient.Options);
    get verification(): VerificationClient;
}
