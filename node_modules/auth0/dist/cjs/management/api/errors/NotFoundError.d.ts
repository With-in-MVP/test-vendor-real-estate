import * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
export declare class NotFoundError extends errors.ManagementError {
    constructor(body?: unknown, rawResponse?: core.RawResponse);
}
