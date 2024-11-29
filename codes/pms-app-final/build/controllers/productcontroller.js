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
const inversify_1 = require("inversify");
const constants_1 = require("../utils/constants");
const responsegenerator_1 = require("../utils/responsegenerator");
let ProductController = class ProductController {
    repository;
    constructor(repository) {
        this.repository = repository;
        console.log('controller created...');
    }
    insertProduct = async (req, res) => {
        try {
            const product = req.body;
            const status = await this.repository.add(product);
            if (status) {
                const products = await this.repository.getAll();
                res.status(200).json((0, responsegenerator_1.generateReponse)('found', products[products.length - 1], 200));
            }
            else {
                res.status(404).json((0, responsegenerator_1.generateReponse)('not found', null, 404));
            }
        }
        catch (error) {
            res.status(500).json((0, responsegenerator_1.generateReponse)(error.message, null, 500));
        }
    };
    deleteProduct = async (req, res) => {
        try {
            const id = +req.params.id;
            const result = await this.repository.remove(id);
            if (result)
                res.status(200).json((0, responsegenerator_1.generateReponse)('deleted', result, 200));
            else
                res.status(404).json((0, responsegenerator_1.generateReponse)('not deleted', null, 404));
        }
        catch (error) {
            res.status(500).json((0, responsegenerator_1.generateReponse)(error.message, null, 500));
        }
    };
    updateProduct = async (req, res) => {
        try {
            const id = +req.params.id;
            const product = req.body;
            const result = await this.repository.update(id, product);
            if (result)
                res.status(200).json((0, responsegenerator_1.generateReponse)('updated', { ...product, productid: id }, 200));
            else
                res.status(404).json((0, responsegenerator_1.generateReponse)('not updated', null, 404));
        }
        catch (error) {
            res.status(500).json((0, responsegenerator_1.generateReponse)(error.message, null, 500));
        }
    };
    fetchProducts = async (req, res) => {
        try {
            const products = await this.repository.getAll();
            res.status(200).json((0, responsegenerator_1.generateReponse)('found', products, 200));
        }
        catch (error) {
            console.log(error);
            res.status(500).json((0, responsegenerator_1.generateReponse)(error.message, null, 500));
        }
    };
    fetchProductById = async (req, res) => {
        try {
            const product = await this.repository.get(+req.params.id);
            res.status(200).json((0, responsegenerator_1.generateReponse)('found', product, 200));
        }
        catch (error) {
            res.status(500).json((0, responsegenerator_1.generateReponse)(error.message, null, 500));
        }
    };
};
ProductController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(constants_1.DI_TOKENS.REPOSITORY_TOKEN)),
    __metadata("design:paramtypes", [Object])
], ProductController);
exports.default = ProductController;
//# sourceMappingURL=productcontroller.js.map