import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as Management from "../../../../../index.js";
export declare namespace ThemesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ThemesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ThemesClient.Options>;
    constructor(options: ThemesClient.Options);
    /**
     * Create branding theme.
     *
     * @param {Management.CreateBrandingThemeRequestContent} request
     * @param {ThemesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.ConflictError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.themes.create({
     *         borders: {
     *             button_border_radius: 1.1,
     *             button_border_weight: 1.1,
     *             buttons_style: "pill",
     *             input_border_radius: 1.1,
     *             input_border_weight: 1.1,
     *             inputs_style: "pill",
     *             show_widget_shadow: true,
     *             widget_border_weight: 1.1,
     *             widget_corner_radius: 1.1
     *         },
     *         colors: {
     *             body_text: "body_text",
     *             error: "error",
     *             header: "header",
     *             icons: "icons",
     *             input_background: "input_background",
     *             input_border: "input_border",
     *             input_filled_text: "input_filled_text",
     *             input_labels_placeholders: "input_labels_placeholders",
     *             links_focused_components: "links_focused_components",
     *             primary_button: "primary_button",
     *             primary_button_label: "primary_button_label",
     *             secondary_button_border: "secondary_button_border",
     *             secondary_button_label: "secondary_button_label",
     *             success: "success",
     *             widget_background: "widget_background",
     *             widget_border: "widget_border"
     *         },
     *         fonts: {
     *             body_text: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             buttons_text: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             font_url: "font_url",
     *             input_labels: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             links: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             links_style: "normal",
     *             reference_text_size: 1.1,
     *             subtitle: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             title: {
     *                 bold: true,
     *                 size: 1.1
     *             }
     *         },
     *         page_background: {
     *             background_color: "background_color",
     *             background_image_url: "background_image_url",
     *             page_layout: "center"
     *         },
     *         widget: {
     *             header_text_alignment: "center",
     *             logo_height: 1.1,
     *             logo_position: "center",
     *             logo_url: "logo_url",
     *             social_buttons_layout: "bottom"
     *         }
     *     })
     */
    create(request: Management.CreateBrandingThemeRequestContent, requestOptions?: ThemesClient.RequestOptions): core.HttpResponsePromise<Management.CreateBrandingThemeResponseContent>;
    private __create;
    /**
     * Retrieve default branding theme.
     *
     * @param {ThemesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.themes.getDefault()
     */
    getDefault(requestOptions?: ThemesClient.RequestOptions): core.HttpResponsePromise<Management.GetBrandingDefaultThemeResponseContent>;
    private __getDefault;
    /**
     * Retrieve branding theme.
     *
     * @param {string} themeId - The ID of the theme
     * @param {ThemesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.themes.get("themeId")
     */
    get(themeId: string, requestOptions?: ThemesClient.RequestOptions): core.HttpResponsePromise<Management.GetBrandingThemeResponseContent>;
    private __get;
    /**
     * Delete branding theme.
     *
     * @param {string} themeId - The ID of the theme
     * @param {ThemesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.themes.delete("themeId")
     */
    delete(themeId: string, requestOptions?: ThemesClient.RequestOptions): core.HttpResponsePromise<void>;
    private __delete;
    /**
     * Update branding theme.
     *
     * @param {string} themeId - The ID of the theme
     * @param {Management.UpdateBrandingThemeRequestContent} request
     * @param {ThemesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Management.BadRequestError}
     * @throws {@link Management.UnauthorizedError}
     * @throws {@link Management.ForbiddenError}
     * @throws {@link Management.NotFoundError}
     * @throws {@link Management.TooManyRequestsError}
     *
     * @example
     *     await client.branding.themes.update("themeId", {
     *         borders: {
     *             button_border_radius: 1.1,
     *             button_border_weight: 1.1,
     *             buttons_style: "pill",
     *             input_border_radius: 1.1,
     *             input_border_weight: 1.1,
     *             inputs_style: "pill",
     *             show_widget_shadow: true,
     *             widget_border_weight: 1.1,
     *             widget_corner_radius: 1.1
     *         },
     *         colors: {
     *             body_text: "body_text",
     *             error: "error",
     *             header: "header",
     *             icons: "icons",
     *             input_background: "input_background",
     *             input_border: "input_border",
     *             input_filled_text: "input_filled_text",
     *             input_labels_placeholders: "input_labels_placeholders",
     *             links_focused_components: "links_focused_components",
     *             primary_button: "primary_button",
     *             primary_button_label: "primary_button_label",
     *             secondary_button_border: "secondary_button_border",
     *             secondary_button_label: "secondary_button_label",
     *             success: "success",
     *             widget_background: "widget_background",
     *             widget_border: "widget_border"
     *         },
     *         fonts: {
     *             body_text: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             buttons_text: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             font_url: "font_url",
     *             input_labels: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             links: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             links_style: "normal",
     *             reference_text_size: 1.1,
     *             subtitle: {
     *                 bold: true,
     *                 size: 1.1
     *             },
     *             title: {
     *                 bold: true,
     *                 size: 1.1
     *             }
     *         },
     *         page_background: {
     *             background_color: "background_color",
     *             background_image_url: "background_image_url",
     *             page_layout: "center"
     *         },
     *         widget: {
     *             header_text_alignment: "center",
     *             logo_height: 1.1,
     *             logo_position: "center",
     *             logo_url: "logo_url",
     *             social_buttons_layout: "bottom"
     *         }
     *     })
     */
    update(themeId: string, request: Management.UpdateBrandingThemeRequestContent, requestOptions?: ThemesClient.RequestOptions): core.HttpResponsePromise<Management.UpdateBrandingThemeResponseContent>;
    private __update;
}
