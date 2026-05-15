import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { CustomSigningClient } from "../resources/customSigning/client/Client.mjs";
import { EncryptionClient } from "../resources/encryption/client/Client.mjs";
import { SigningClient } from "../resources/signing/client/Client.mjs";
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
