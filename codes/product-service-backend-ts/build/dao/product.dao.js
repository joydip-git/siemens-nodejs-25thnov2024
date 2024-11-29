"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDao = void 0;
var fs_1 = require("fs");
var dotenv_1 = __importDefault(require("dotenv"));
var inversify_1 = require("inversify");
dotenv_1.default.config();
var filePath = process.env.PRODUCTS_FILE_PATH || '../data/products.json';
var ProductDao = /** @class */ (function () {
    function ProductDao() {
    }
    ProductDao.prototype.readFromFile = function () {
        return new Promise(function (resolve, reject) {
            (0, fs_1.readFile)(filePath, function (err, data) {
                if (data) {
                    var records = JSON.parse(data.toString());
                    resolve(records);
                }
                if (err)
                    reject(err.message);
            });
        });
    };
    ProductDao.prototype.writeIntoFile = function (data) {
        return new Promise(function (resolve, reject) {
            (0, fs_1.writeFile)(filePath, JSON.stringify(data), function (err) {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    };
    ProductDao = __decorate([
        (0, inversify_1.injectable)()
    ], ProductDao);
    return ProductDao;
}());
exports.ProductDao = ProductDao;
//# sourceMappingURL=product.dao.js.map