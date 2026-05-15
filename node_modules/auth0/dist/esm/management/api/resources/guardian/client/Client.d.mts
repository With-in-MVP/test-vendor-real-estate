import type { BaseClientOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import { EnrollmentsClient } from "../resources/enrollments/client/Client.mjs";
import { FactorsClient } from "../resources/factors/client/Client.mjs";
import { PoliciesClient } from "../resources/policies/client/Client.mjs";
export declare namespace GuardianClient {
    type Options = BaseClientOptions;
}
export declare class GuardianClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<GuardianClient.Options>;
    protected _enrollments: EnrollmentsClient | undefined;
    protected _factors: FactorsClient | undefined;
    protected _policies: PoliciesClient | undefined;
    constructor(options: GuardianClient.Options);
    get enrollments(): EnrollmentsClient;
    get factors(): FactorsClient;
    get policies(): PoliciesClient;
}
