import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace BlocksClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BlocksClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BlocksClient.Options>;
    constructor(options: BlocksClient.Options);
    /**
     * Check if the given IP address is blocked via the <a href="https://auth0.com/docs/configure/attack-protection/suspicious-ip-throttling">Suspicious IP Throttling</a> due to multiple suspicious attempts.
     *
     * @param {Management.AnomalyIpFormat} id - IP address to check.
     * @param {BlocksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.anomaly.blocks.checkIp("id")
     */
    checkIp(id: Management.AnomalyIpFormat, requestOptions?: BlocksClient.RequestOptions): core.HttpResponsePromise<void>;
    private __checkIp;
    /**
     * Remove a block imposed by <a href="https://auth0.com/docs/configure/attack-protection/suspicious-ip-throttling">Suspicious IP Throttling</a> for the given IP address.
     *
     * @param {Management.AnomalyIpFormat} id - IP address to unblock.
     * @param {BlocksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.anomaly.blocks.unblockIp("id")
     */
    unblockIp(id: Management.AnomalyIpFormat, requestOptions?: BlocksClient.RequestOptions): core.HttpResponsePromise<void>;
    private __unblockIp;
}
