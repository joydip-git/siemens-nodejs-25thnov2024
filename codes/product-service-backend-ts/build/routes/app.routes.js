"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var express_1 = require("express");
var app_constants_1 = __importDefault(require("../utilities/app-constants"));
var inversify_1 = require("inversify");
require("reflect-metadata");
var PRODUCTS_BASE_URL = process.env.PRODUCTS_BASE_URL || 'products';
var AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'auth';
var AppRoutes = /** @class */ (function () {
    function AppRoutes(productController, userController, authMiddleware) {
        this.productController = productController;
        this.userController = userController;
        this.authMiddleware = authMiddleware;
    }
    AppRoutes.prototype.registerRoutes = function () {
        var _this = this;
        var routerMiddleware = (0, express_1.Router)();
        routerMiddleware.post("".concat(AUTH_BASE_URL, "/register"), this.userController.registerAction);
        routerMiddleware.post("".concat(AUTH_BASE_URL, "/login"), this.userController.loginAction);
        routerMiddleware.get(PRODUCTS_BASE_URL, function (req, res, next) {
            _this.authMiddleware.verifyToken(req, res, next);
        }, this.productController.getAllAction);
        routerMiddleware.get("".concat(PRODUCTS_BASE_URL, "/:id"), function (req, res, next) {
            _this.authMiddleware.verifyToken(req, res, next);
        }, this.productController.getAction);
        routerMiddleware.post(PRODUCTS_BASE_URL, function (req, res, next) {
            _this.authMiddleware.verifyToken(req, res, next);
        }, this.productController.postAction);
        routerMiddleware.put("".concat(PRODUCTS_BASE_URL, "/:id"), function (req, res, next) {
            _this.authMiddleware.verifyToken(req, res, next);
        }, this.productController.putAction);
        routerMiddleware.delete("".concat(PRODUCTS_BASE_URL, "/:id"), function (req, res, next) {
            _this.authMiddleware.verifyToken(req, res, next);
        }, this.productController.deleteAction);
        // routerMiddleware.get(
        //     PRODUCTS_BASE_URL,
        //     this.productController.getAllAction
        // )
        // routerMiddleware.get(
        //     `${PRODUCTS_BASE_URL}/:id`,
        //     this.productController.getAction
        // )
        // routerMiddleware.post(
        //     PRODUCTS_BASE_URL,
        //     this.productController.postAction
        // )
        // routerMiddleware.put(
        //     `${PRODUCTS_BASE_URL}/:id`,
        //     this.productController.putAction
        // )
        // routerMiddleware.delete(
        //     `${PRODUCTS_BASE_URL}/:id`, this.productController.deleteAction
        // )
        return routerMiddleware;
    };
    AppRoutes = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(app_constants_1.default.PRODUCT_CONTROLLER_TOKEN)),
        __param(1, (0, inversify_1.inject)(app_constants_1.default.USER_CONTROLLER_TOKEN)),
        __param(2, (0, inversify_1.inject)(app_constants_1.default.AUTH_MIDDLEWARE_TOKEN)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], AppRoutes);
    return AppRoutes;
}());
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=app.routes.js.map