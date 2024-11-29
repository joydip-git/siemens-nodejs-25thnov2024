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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const inversify_1 = require("inversify");
let ApiController = class ApiController {
    constructor() {
        console.log('Api controller created...');
    }
    async getAction(req, res) {
        res.write('hello');
        res.send();
    }
    async getAllAction(req, res) {
        res.write('hello ' + req.params.name + '. salary is ' + req.params.salary);
        res.send();
    }
};
exports.ApiController = ApiController;
exports.ApiController = ApiController = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ApiController);
