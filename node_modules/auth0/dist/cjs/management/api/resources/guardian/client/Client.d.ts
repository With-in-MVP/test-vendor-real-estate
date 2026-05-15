import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import { EnrollmentsClient } from "../resources/enrollments/client/Client.js";
import { FactorsClient } from "../resources/factors/client/Client.js";
import { PoliciesClient } from "../resources/policies/client/Client.js";
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
