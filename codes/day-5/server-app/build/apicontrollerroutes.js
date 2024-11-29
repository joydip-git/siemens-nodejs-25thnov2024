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
const express_1 = require("express");
const inversify_1 = require("inversify");
const tokens_1 = require("./tokens");
let ApiControllerRoutes = class ApiControllerRoutes {
    controller;
    apiRouter = (0, express_1.Router)();
    constructor(controller) {
        this.controller = controller;
        console.log('api controller Routes created...');
    }
    getRegisteredRoutes() {
        this.apiRouter.get('/', this.controller.getAction);
        this.apiRouter.get('/:name/:salary?', this.controller.getAllAction);
        return this.apiRouter;
    }
};
ApiControllerRoutes = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(tokens_1.APP_TOKENS.APICONTROLLER_TOKEN)),
    __metadata("design:paramtypes", [Object])
], ApiControllerRoutes);
// const apiRouter = Router()
// const controller = new ApiController()
// apiRouter.get('/', controller.getAction)
// apiRouter.get('/:name/:salary?', controller.getAllAction)
exports.default = ApiControllerRoutes;
