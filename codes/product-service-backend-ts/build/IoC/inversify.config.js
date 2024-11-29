"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
require("reflect-metadata");
var app_constants_1 = __importDefault(require("../utilities/app-constants"));
var product_dao_1 = require("../dao/product.dao");
var user_dao_1 = require("../dao/user.dao");
var auth_middleware_1 = require("../middleware/auth.middleware");
var product_bo_1 = require("../bo/product.bo");
var user_bo_1 = require("../bo/user.bo");
var user_controller_1 = require("../controller/user.controller");
var product_controller_1 = require("../controller/product.controller");
var app_routes_1 = require("../routes/app.routes");
var container = new inversify_1.Container();
container.bind(app_constants_1.default.PRODUCT_DAO_TOKEN).to(product_dao_1.ProductDao);
container.bind(app_constants_1.default.USER_DAO_TOKEN).to(user_dao_1.UserDao);
container.bind(app_constants_1.default.PRODUCT_BO_TOKEN).to(product_bo_1.ProductBo);
container.bind(app_constants_1.default.USER_BO_TOKEN).to(user_bo_1.UserBo);
container.bind(app_constants_1.default.PRODUCT_CONTROLLER_TOKEN).to(product_controller_1.ProductController);
container.bind(app_constants_1.default.USER_CONTROLLER_TOKEN).to(user_controller_1.UserController);
container.bind(app_constants_1.default.AUTH_MIDDLEWARE_TOKEN).to(auth_middleware_1.AuthMiddleware);
container.bind(app_constants_1.default.APP_ROUTES_TOKEN).to(app_routes_1.AppRoutes);
exports.default = container;
//# sourceMappingURL=inversify.config.js.map