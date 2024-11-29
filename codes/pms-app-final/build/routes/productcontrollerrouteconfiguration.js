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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllerRouterConfiguration = void 0;
const express_1 = require("express");
const inversify_1 = require("inversify");
const constants_1 = require("../utils/constants");
let ProductControllerRouterConfiguration = class ProductControllerRouterConfiguration {
    controller;
    router = (0, express_1.Router)();
    constructor(controller) {
        this.controller = controller;
        console.log('pcr created...');
    }
    getRegisteredRoutes() {
        this.router.get('/all', this.controller.fetchProducts);
        this.router.get('/:id', this.controller.fetchProductById);
        this.router.post('/add', this.controller.insertProduct);
        this.router.put('/update/:id', this.controller.updateProduct);
        this.router.delete('/delete/:id', this.controller.deleteProduct);
        return this.router;
    }
};
exports.ProductControllerRouterConfiguration = ProductControllerRouterConfiguration;
exports.ProductControllerRouterConfiguration = ProductControllerRouterConfiguration = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(constants_1.DI_TOKENS.CONTROLLER_TOKEN)),
    __metadata("design:paramtypes", [Object])
], ProductControllerRouterConfiguration);
//# sourceMappingURL=productcontrollerrouteconfiguration.js.map