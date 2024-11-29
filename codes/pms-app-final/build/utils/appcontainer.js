"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const constants_1 = require("./constants");
const productrepository_1 = __importDefault(require("../repository/productrepository"));
const productcontroller_1 = __importDefault(require("../controllers/productcontroller"));
const productcontrollerrouteconfiguration_1 = require("../routes/productcontrollerrouteconfiguration");
const aprouteconfiguration_1 = require("../routes/aprouteconfiguration");
const appcontainer = new inversify_1.Container({ autoBindInjectable: true });
appcontainer.bind(constants_1.DI_TOKENS.REPOSITORY_TOKEN).to(productrepository_1.default);
appcontainer.bind(constants_1.DI_TOKENS.CONTROLLER_TOKEN).to(productcontroller_1.default);
appcontainer.bind(constants_1.DI_TOKENS.PRODUCT_CONTROLLER_ROUTES_TOKEN).to(productcontrollerrouteconfiguration_1.ProductControllerRouterConfiguration);
appcontainer.bind(constants_1.DI_TOKENS.APP_ROUTES_TOKEN).to(aprouteconfiguration_1.AppRouteConfiguration);
exports.default = appcontainer;
//# sourceMappingURL=appcontainer.js.map