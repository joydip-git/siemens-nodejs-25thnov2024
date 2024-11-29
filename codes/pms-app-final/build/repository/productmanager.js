"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mssql_1 = require("mssql");
var constants_1 = require("../utils/constants");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    ProductManager.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pool, request, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, (0, mssql_1.connect)(constants_1.DB_CONFIG)];
                    case 1:
                        pool = _a.sent();
                        request = pool.request();
                        return [4 /*yield*/, request.query('select * from products')];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, results.recordset];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4:
                        pool === null || pool === void 0 ? void 0 : pool.close();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pool, result, found, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, (0, mssql_1.connect)(constants_1.DB_CONFIG)];
                    case 1:
                        pool = _a.sent();
                        return [4 /*yield*/, pool
                                .request()
                                .input('id', id)
                                .query('select * from products where productid=@id')];
                    case 2:
                        result = _a.sent();
                        found = result.recordset[0];
                        if (found)
                            return [2 /*return*/, found];
                        else
                            throw new Error("no product with id:".concat(id, " found..."));
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4:
                        pool === null || pool === void 0 ? void 0 : pool.close();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.add = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var pool, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, (0, mssql_1.connect)(constants_1.DB_CONFIG)];
                    case 1:
                        pool = _a.sent();
                        return [4 /*yield*/, pool
                                .request()
                                .input('name', product.productName)
                                .input('price', product.price)
                                .input('desc', product.description)
                                .input('code', product.productCode)
                                .input('date', product.releaseDate)
                                .input('rating', product.starRating)
                                .input('image', product.imageUrl)
                                .query('insert into products(productname,productcode,releasedate,description,price,starrating,imageurl) values(@name,@code,@date,@desc,@price,@rating,@image)')];
                    case 2:
                        result = _a.sent();
                        if (result.rowsAffected[0] > 0)
                            return [2 /*return*/, true];
                        else
                            throw new Error('could not add data');
                        return [3 /*break*/, 5];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4:
                        pool === null || pool === void 0 ? void 0 : pool.close();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.update = function (id, product) {
        return __awaiter(this, void 0, void 0, function () {
            var pool, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, (0, mssql_1.connect)(constants_1.DB_CONFIG)];
                    case 1:
                        pool = _a.sent();
                        return [4 /*yield*/, pool
                                .request()
                                .input('id', id)
                                .input('name', product.productName)
                                .input('price', product.price)
                                .input('desc', product.description)
                                .input('code', product.productCode)
                                .input('date', product.releaseDate)
                                .input('rating', product.starRating)
                                .input('image', product.imageUrl)
                                .query('update products set productname=@name, productcode=@code, releasedate=@date, description=@desc, price=@price, starrating=@rating, imageurl=@image where productid=@id)')];
                    case 2:
                        result = _a.sent();
                        if (result.rowsAffected[0] > 0)
                            return [2 /*return*/, true];
                        else
                            throw new Error('product with ' + id + ' does not exist');
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4:
                        pool === null || pool === void 0 ? void 0 : pool.close();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pool, found, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, (0, mssql_1.connect)(constants_1.DB_CONFIG)];
                    case 1:
                        pool = _a.sent();
                        return [4 /*yield*/, this.get(id)];
                    case 2:
                        found = _a.sent();
                        return [4 /*yield*/, pool
                                .request()
                                .input('id', id)
                                .query('delete from products where productid=@id')];
                    case 3:
                        result = _a.sent();
                        if (result.rowsAffected[0] > 0)
                            return [2 /*return*/, found];
                        else
                            throw new Error("a product with same id (".concat(id, ") does not exist.."));
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        throw error_4;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ProductManager;
}());
exports.default = ProductManager;
//# sourceMappingURL=productmanager.js.map