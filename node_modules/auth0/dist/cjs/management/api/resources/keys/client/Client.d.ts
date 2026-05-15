import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import { CustomSigningClient } from "../resources/customSigning/client/Client.js";
import { EncryptionClient } from "../resources/encryption/client/Client.js";
import { SigningClient } from "../resources/signing/client/Client.js";
export declare namespace KeysClient {
    type Options = BaseClientOptions;
}
export declare class KeysClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<KeysClient.Options>;
    protected _customSigning: CustomSigningClient | undefined;
    protected _encryption: EncryptionClient | undefined;
    protected _signing: SigningClient | undefined;
    constructor(options: KeysClient.Options);
    get customSigning(): CustomSigningClient;
    get encryption(): EncryptionClient;
    get signing(): SigningClient;
}
