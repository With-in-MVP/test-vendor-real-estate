import * as core from "../../core/index.mjs";
import * as errors from "../../errors/index.mjs";
export declare class ForbiddenError extends errors.ManagementError {
    constructor(body?: unknown, rawResponse?: core.RawResponse);
}
