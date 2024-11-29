"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DI_TOKENS = exports.DB_CONFIG = exports.APP_CONSTANTS = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_CONSTANTS = {
    filePath: ''
};
exports.DB_CONFIG = {
    server: process.env.SQL_SERVER_NAME || '',
    database: process.env.DATABASE,
    user: process.env.USER_ID,
    password: process.env.PASSWORD,
    options: {
        trustServerCertificate: true,
        encrypt: false,
        instanceName: process.env.INSTANCE_NAME
    },
    port: Number(process.env.SQL_EXPRESS_PORT) || 1433,
};
exports.DI_TOKENS = {
    REPOSITORY_TOKEN: Symbol('REPOSITORY_TOKEN'),
    CONTROLLER_TOKEN: Symbol('CONTROLLER_TOKEN'),
    PRODUCT_CONTROLLER_ROUTES_TOKEN: Symbol('PRODUCT_CONTROLLER_ROUTES_TOKEN'),
    APP_ROUTES_TOKEN: Symbol('APP_ROUTES_TOKEN')
};
//# sourceMappingURL=constants.js.map