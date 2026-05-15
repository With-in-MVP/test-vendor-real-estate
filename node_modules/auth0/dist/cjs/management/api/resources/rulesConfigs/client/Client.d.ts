import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as Management from "../../../index.js";
export declare namespace RulesConfigsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class RulesConfigsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RulesConfigsClient.Options>;
    constructor(options: RulesConfigsClient.Options);
    /**
     * Retrieve rules config variable keys.
     *
     *     Note: For security, config variable values cannot be retrieved outside rule execution.
     *
     * @param {RulesConfigsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.rulesConfigs.list()
     */
    list(requestOptions?: RulesConfigsClient.RequestOptions): core.HttpResponsePromise<Management.RulesConfig[]>;
    private __list;
    /**
     * Sets a rules config variable.
     *
     * @param {string} key - Key of the rules config variable to set (max length: 127 characters).
     * @param {Management.SetRulesConfigRequestContent} request
     * @param {RulesConfigsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.rulesConfigs.set("key", {
     *         value: "value"
     *     })
     */
    set(key: string, request: Management.SetRulesConfigRequestContent, requestOptions?: RulesConfigsClient.RequestOptions): core.HttpResponsePromise<Management.SetRulesConfigResponseContent>;
    private __set;
    /**
     * Delete a rules config variable identified by its key.
     *
     * @param {string} key - Key of the rules config variable to delete.
     * @param {RulesConfigsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.rulesConfigs.delete("key")
     */
    delete(key: string, requestOptions?: RulesConfigsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
}
