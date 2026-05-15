import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.mjs";
import * as core from "../../../../core/index.mjs";
import * as Management from "../../../index.mjs";
export declare namespace SupplementalSignalsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SupplementalSignalsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SupplementalSignalsClient.Options>;
    constructor(options: SupplementalSignalsClient.Options);
    /**
     * Get the supplemental signals configuration for a tenant.
     *
     * @param {SupplementalSignalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.supplementalSignals.get()
     */
    get(requestOptions?: SupplementalSignalsClient.RequestOptions): core.HttpResponsePromise<Management.GetSupplementalSignalsResponseContent>;
    private __get;
    /**
     * Update the supplemental signals configuration for a tenant.
     *
     * @param {Management.UpdateSupplementalSignalsRequestContent} request
     * @param {SupplementalSignalsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.supplementalSignals.patch({
     *         akamai_enabled: true
     *     })
     */
    patch(request: Management.UpdateSupplementalSignalsRequestContent, requestOptions?: SupplementalSignalsClient.RequestOptions): core.HttpResponsePromise<Management.PatchSupplementalSignalsResponseContent>;
    private __patch;
}
