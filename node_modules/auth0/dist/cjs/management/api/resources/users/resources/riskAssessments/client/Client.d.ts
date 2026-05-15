import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace RiskAssessmentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class RiskAssessmentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RiskAssessmentsClient.Options>;
    constructor(options: RiskAssessmentsClient.Options);
    /**
     * Clear risk assessment assessors for a specific user
     *
     * @param {string} id - ID of the user to clear assessors for.
     * @param {Management.ClearAssessorsRequestContent} request
     * @param {RiskAssessmentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.users.riskAssessments.clear("id", {
     *         connection: "connection",
     *         assessors: ["new-device"]
     *     })
     */
    clear(id: string, request: Management.ClearAssessorsRequestContent, requestOptions?: RiskAssessmentsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __clear;
}
