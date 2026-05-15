import { ManagementClient } from "./ManagementClient.mjs";
export declare class TokenProvider {
    private readonly options;
    private authenticationClient;
    private expiresAt;
    private accessToken;
    private pending;
    constructor(options: ManagementClient.ManagementClientOptionsWithClientSecret & {
        audience: string;
    });
    constructor(options: ManagementClient.ManagementClientOptionsWithClientAssertion & {
        audience: string;
    });
    getAccessToken(): Promise<string>;
}
