var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JSONApiResponse, TextApiResponse } from "../lib/models.mjs";
import { validateRequiredRequestParams } from "../lib/runtime.mjs";
import { BaseAuthAPI } from "./base-auth-api.mjs";
/**
 * Sign-up and change-password for Database & Active Directory authentication services.
 */
export class Database extends BaseAuthAPI {
    /**
     * Given a user's credentials, and a connection, this endpoint will create a new user using active authentication.
     *
     * This endpoint only works for database connections.
     *
     * See: https://auth0.com/docs/api/authentication#signup
     *
     * @example
     * ```js
     * var data = {
     *   email: '{EMAIL}',
     *   password: '{PASSWORD}',
     *   connection: 'Username-Password-Authentication'
     * };
     *
     * await auth0.database.signUp(data);
     * ```
     */
    signUp(bodyParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: call this `validateRequiredParams` so we can use with bodyParameters in the auth api
            validateRequiredRequestParams(bodyParameters, ["email", "password", "connection"]);
            const response = yield this.request({
                path: "/dbconnections/signup",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: Object.assign({ client_id: this.clientId }, bodyParameters),
            }, initOverrides);
            // Transform the response to ensure id field is always available
            const jsonResponse = yield JSONApiResponse.fromResponse(response);
            if (jsonResponse.data) {
                const data = jsonResponse.data;
                // Map _id or user_id to id
                if (!data.id && (data._id || data.user_id)) {
                    data.id = data._id || data.user_id;
                }
            }
            return jsonResponse;
        });
    }
    /**
     * Given a user's email address and a connection, Auth0 will send a change password email.
     *
     * This endpoint only works for database connections.
     *
     * See: https://auth0.com/docs/api/authentication#change-password
     *
     * @example
     * ```js
     * var data = {
     *   email: '{EMAIL}',
     *   connection: 'Username-Password-Authentication'
     * };
     *
     * await auth0.database.changePassword(data);
     * ```
     */
    changePassword(bodyParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            validateRequiredRequestParams(bodyParameters, ["email", "connection"]);
            const response = yield this.request({
                path: "/dbconnections/change_password",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: Object.assign({ client_id: this.clientId }, bodyParameters),
            }, initOverrides);
            return TextApiResponse.fromResponse(response);
        });
    }
}
