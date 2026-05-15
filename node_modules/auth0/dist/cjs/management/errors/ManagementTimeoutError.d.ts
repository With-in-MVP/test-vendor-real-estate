export declare class ManagementTimeoutError extends Error {
    readonly cause?: unknown;
    constructor(message: string, opts?: {
        cause?: unknown;
    });
}
