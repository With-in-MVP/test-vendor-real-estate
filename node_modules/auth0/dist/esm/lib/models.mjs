var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class JSONApiResponse {
    constructor(data, headers, status, statusText) {
        this.data = data;
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static fromResponse(raw) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = (yield raw.json());
            return new JSONApiResponse(value, raw.headers, raw.status, raw.statusText);
        });
    }
}
export class VoidApiResponse {
    constructor(headers, status, statusText) {
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static fromResponse(raw) {
        return __awaiter(this, void 0, void 0, function* () {
            return new VoidApiResponse(raw.headers, raw.status, raw.statusText);
        });
    }
}
export class TextApiResponse {
    constructor(data, headers, status, statusText) {
        this.data = data;
        this.headers = headers;
        this.status = status;
        this.statusText = statusText;
    }
    static fromResponse(raw) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield raw.text();
            return new TextApiResponse(value, raw.headers, raw.status, raw.statusText);
        });
    }
}
