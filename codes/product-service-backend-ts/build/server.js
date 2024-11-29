"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = require("dotenv");
var inversify_config_1 = __importDefault(require("./IoC/inversify.config"));
var app_constants_1 = __importDefault(require("./utilities/app-constants"));
(0, dotenv_1.config)();
var PORT = process.env.PORT || 4000;
var PRODUCTS_BASE_URL = process.env.PRODUCTS_BASE_URL || 'products';
var AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'auth';
var app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: '*', methods: '*', allowedHeaders: '*' }));
app.use((0, express_1.json)());
var appRoutes = inversify_config_1.default.get(app_constants_1.default.APP_ROUTES_TOKEN);
app.use(appRoutes.registerRoutes());
app.listen(PORT, function () {
    console.log("product server is running at http://localhost:".concat(PORT).concat(PRODUCTS_BASE_URL));
    console.log("auth server is running at http://localhost:".concat(PORT).concat(AUTH_BASE_URL));
});
//# sourceMappingURL=server.js.map