import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { CreatePhoneProviderRequest, CreatePhoneTemplateRequestContent, CreatePhoneTemplateResponseContent, GetBranding200Response, GetBrandingPhoneProviders200Response, GetBrandingPhoneProviders200ResponseProvidersInner, GetPhoneTemplateResponseContent, GetUniversalLogin200Response, ListPhoneTemplatesResponseContent, PatchBrandingRequest, PostBrandingTheme200Response, PostBrandingThemeRequest, PutUniversalLoginRequest, ResetPhoneTemplateResponseContent, UpdatePhoneProviderRequest, UpdatePhoneTemplateRequestContent, UpdatePhoneTemplateResponseContent, DeleteBrandingThemeRequest, DeletePhoneProviderRequest, DeletePhoneTemplateRequest, GetBrandingPhoneProvidersRequest, GetBrandingThemeRequest, GetPhoneProviderRequest, GetPhoneTemplateRequest, GetPhoneTemplatesRequest, PatchBrandingThemeRequest, ResetPhoneTemplateRequest, UpdatePhoneProviderOperationRequest, UpdatePhoneTemplateRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class BrandingManager extends BaseAPI {
    /**
     * Create a <a href="https://auth0.com/docs/customize/phone-messages/configure-phone-messaging-providers">phone provider</a>.
     * The <code>credentials</code> object requires different properties depending on the phone provider (which is specified using the <code>name</code> property).
     *
     * Configure the phone provider
     *
     * @throws {RequiredError}
     */
    configurePhoneProvider(bodyParameters: CreatePhoneProviderRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBrandingPhoneProviders200ResponseProvidersInner>>;
    /**
     * Create a phone notification template
     *
     * @throws {RequiredError}
     */
    createPhoneTemplate(bodyParameters: CreatePhoneTemplateRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<CreatePhoneTemplateResponseContent>>;
    /**
     * Delete branding theme.
     * Delete branding theme
     *
     * @throws {RequiredError}
     */
    deleteTheme(requestParameters: DeleteBrandingThemeRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Delete the configured phone provider.
     *
     * Deletes a Phone Provider
     *
     * @throws {RequiredError}
     */
    deletePhoneProvider(requestParameters: DeletePhoneProviderRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Delete a phone notification template
     *
     * @throws {RequiredError}
     */
    deletePhoneTemplate(requestParameters: DeletePhoneTemplateRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Delete template for New Universal Login Experience
     *
     * @throws {RequiredError}
     */
    deleteUniversalLoginTemplate(initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve branding settings.
     * Get branding settings
     *
     * @throws {RequiredError}
     */
    getSettings(initOverrides?: InitOverride): Promise<ApiResponse<GetBranding200Response>>;
    /**
     * Retrieve a list of <a href="https://auth0.com/docs/customize/phone-messages/configure-phone-messaging-providers">phone providers</a> details set for a Tenant. A list of fields to include or exclude may also be specified.
     *
     * Get a list of phone providers
     *
     * @throws {RequiredError}
     */
    getAllPhoneProviders(requestParameters?: GetBrandingPhoneProvidersRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBrandingPhoneProviders200Response>>;
    /**
     * Retrieve branding theme.
     * Get branding theme
     *
     * @throws {RequiredError}
     */
    getTheme(requestParameters: GetBrandingThemeRequest, initOverrides?: InitOverride): Promise<ApiResponse<PostBrandingTheme200Response>>;
    /**
     * Retrieve default branding theme.
     * Get default branding theme
     *
     * @throws {RequiredError}
     */
    getDefaultTheme(initOverrides?: InitOverride): Promise<ApiResponse<PostBrandingTheme200Response>>;
    /**
     * Retrieve <a href="https://auth0.com/docs/customize/phone-messages/configure-phone-messaging-providers">phone provider</a> details. A list of fields to include or exclude may also be specified.
     *
     * Get a phone provider
     *
     * @throws {RequiredError}
     */
    getPhoneProvider(requestParameters: GetPhoneProviderRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBrandingPhoneProviders200ResponseProvidersInner>>;
    /**
     * Get a phone notification template
     *
     * @throws {RequiredError}
     */
    getPhoneTemplate(requestParameters: GetPhoneTemplateRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetPhoneTemplateResponseContent>>;
    /**
     * Get a list of phone notification templates
     *
     * @throws {RequiredError}
     */
    getAllPhoneTemplates(requestParameters?: GetPhoneTemplatesRequest, initOverrides?: InitOverride): Promise<ApiResponse<ListPhoneTemplatesResponseContent>>;
    /**
     * Get template for New Universal Login Experience
     *
     * @throws {RequiredError}
     */
    getUniversalLoginTemplate(initOverrides?: InitOverride): Promise<ApiResponse<GetUniversalLogin200Response>>;
    /**
     * Update branding settings.
     * Update branding settings
     *
     * @throws {RequiredError}
     */
    updateSettings(bodyParameters: PatchBrandingRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBranding200Response>>;
    /**
     * Update branding theme.
     * Update branding theme
     *
     * @throws {RequiredError}
     */
    updateTheme(requestParameters: PatchBrandingThemeRequest, bodyParameters: PostBrandingThemeRequest, initOverrides?: InitOverride): Promise<ApiResponse<PostBrandingTheme200Response>>;
    /**
     * Create branding theme.
     * Create branding theme
     *
     * @throws {RequiredError}
     */
    createTheme(bodyParameters: PostBrandingThemeRequest, initOverrides?: InitOverride): Promise<ApiResponse<PostBrandingTheme200Response>>;
    /**
     * Update the Universal Login branding template.
     *
     * <p>When <code>content-type</code> header is set to <code>application/json</code>, the expected body must be JSON:</p>
     * <pre>
     * {
     *   "template": "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;{%- auth0:head -%}&lt;/head&gt;&lt;body&gt;{%- auth0:widget -%}&lt;/body&gt;&lt;/html&gt;"
     * }
     * </pre>
     *
     * <p>
     *   When <code>content-type</code> header is set to <code>text/html</code>, the expected body must be the HTML template:
     * </p>
     * <pre>
     * &lt!DOCTYPE html&gt;
     * &lt;code&gt;
     *   &lt;html&gt;
     *     &lt;head&gt;
     *      {%- auth0:head -%}
     *     &lt;/head&gt;
     *     &lt;body&gt;
     *       {%- auth0:widget -%}
     *     &lt;/body&gt;
     *   &lt;/html&gt;
     * &lt;/code&gt;
     * </pre>
     *
     * Set template for New Universal Login Experience
     *
     * @throws {RequiredError}
     */
    setUniversalLoginTemplate(bodyParameters: PutUniversalLoginRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Resets a phone notification template values
     *
     * @throws {RequiredError}
     */
    resetTemplate(requestParameters: ResetPhoneTemplateRequest, bodyParameters: any | null, initOverrides?: InitOverride): Promise<ApiResponse<ResetPhoneTemplateResponseContent>>;
    /**
     * Update a <a href="https://auth0.com/docs/customize/phone-messages/configure-phone-messaging-providers">phone provider</a>.
     * The <code>credentials</code> object requires different properties depending on the phone provider (which is specified using the <code>name</code> property).
     *
     * Update the phone provider
     *
     * @throws {RequiredError}
     */
    updatePhoneProvider(requestParameters: UpdatePhoneProviderOperationRequest, bodyParameters: UpdatePhoneProviderRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBrandingPhoneProviders200ResponseProvidersInner>>;
    /**
     * Update a phone notification template
     *
     * @throws {RequiredError}
     */
    updatePhoneTemplate(requestParameters: UpdatePhoneTemplateRequest, bodyParameters: UpdatePhoneTemplateRequestContent, initOverrides?: InitOverride): Promise<ApiResponse<UpdatePhoneTemplateResponseContent>>;
}
export {};
