import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetNetworkAclsById200Response, PatchNetworkAclsById200Response, PatchNetworkAclsByIdRequest, PutNetworkAclsByIdRequest, GetNetworkAcls200ResponseOneOf, DeleteNetworkAclsByIdRequest, GetNetworkAclsRequest, GetNetworkAclsByIdRequest, PatchNetworkAclsByIdOperationRequest, PutNetworkAclsByIdOperationRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class NetworkAclsManager extends BaseAPI {
    /**
     * Delete existing access control list for your client.
     * Delete Access Control List
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteNetworkAclsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Get all access control list entries for your client.
     * Get all access control list entries for a tenant
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters: GetNetworkAclsRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetNetworkAcls200ResponseOneOf>>;
    getAll(requestParameters?: GetNetworkAclsRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<GetNetworkAclsById200Response>>>;
    /**
     * Get a specific access control list entry for your client.
     * Get a specific access control list entry for a tenant
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetNetworkAclsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetNetworkAclsById200Response>>;
    /**
     * Update existing access control list for your client.
     * Partial Update for an Access Control List
     *
     * @throws {RequiredError}
     */
    patch(requestParameters: PatchNetworkAclsByIdOperationRequest, bodyParameters: PatchNetworkAclsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<PatchNetworkAclsById200Response>>;
    /**
     * Create a new access control list for your client.
     * Create Access Control List
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: PutNetworkAclsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetNetworkAclsById200Response>>;
    /**
     * Update existing access control list for your client.
     * Update Access Control List
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PutNetworkAclsByIdOperationRequest, bodyParameters: PutNetworkAclsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetNetworkAclsById200Response>>;
}
export {};
