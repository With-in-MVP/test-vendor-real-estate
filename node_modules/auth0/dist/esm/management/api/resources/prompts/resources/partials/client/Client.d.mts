import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.mjs";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.mjs";
import * as core from "../../../../../../core/index.mjs";
import * as Management from "../../../../../index.mjs";
export declare namespace PartialsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class PartialsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PartialsClient.Options>;
    constructor(options: PartialsClient.Options);
    /**
     * Get template partials for a prompt
     *
     * @param {Management.PartialGroupsEnum} prompt - Name of the prompt.
     * @param {PartialsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.prompts.partials.get("login")
     */
    get(prompt: Management.PartialGroupsEnum, requestOptions?: PartialsClient.RequestOptions): core.HttpResponsePromise<Management.GetPartialsResponseContent>;
    private __get;
    /**
     * Set template partials for a prompt
     *
     * @param {Management.PartialGroupsEnum} prompt - Name of the prompt.
     * @param {Management.SetPartialsRequestContent} request
     * @param {PartialsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.prompts.partials.set("login", {
     *         "key": "value"
     *     })
     */
    set(prompt: Management.PartialGroupsEnum, request: Management.SetPartialsRequestContent, requestOptions?: PartialsClient.RequestOptions): core.HttpResponsePromise<void>;
    private __set;
}
