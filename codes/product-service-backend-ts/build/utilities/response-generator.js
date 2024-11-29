"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createResponse;
function createResponse(message, status, data) {
    var apiResponse = {
        message: message,
        statusCode: status,
        value: data ? data : null
    };
    return JSON.stringify(apiResponse);
}
//# sourceMappingURL=response-generator.js.map