"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const tokens_1 = require("./tokens");
const apicontroller_1 = require("./apicontroller");
const apicontrollerroutes_1 = __importDefault(require("./apicontrollerroutes"));
const approutes_1 = __importDefault(require("./approutes"));
const appcontainer = new inversify_1.Container();
appcontainer.bind(tokens_1.APP_TOKENS.APICONTROLLER_TOKEN).to(apicontroller_1.ApiController);
appcontainer.bind(tokens_1.APP_TOKENS.APICONTROLLER_ROUTES_TOKEN).to(apicontrollerroutes_1.default);
appcontainer.bind(tokens_1.APP_TOKENS.APP_ROUTES_TOKEN).to(approutes_1.default);
exports.default = appcontainer;
