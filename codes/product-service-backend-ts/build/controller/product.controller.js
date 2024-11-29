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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var inversify_1 = require("inversify");
var app_constants_1 = __importDefault(require("../utilities/app-constants"));
var response_generator_1 = __importDefault(require("../utilities/response-generator"));
var ProductController = /** @class */ (function () {
    function ProductController(bo) {
        var _this = this;
        this.bo = bo;
        this.getAction = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var productId, product, response, error_1, errResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productId = Number(req.params.id);
                        return [4 /*yield*/, this.bo.get(productId)];
                    case 1:
                        product = _a.sent();
                        response = (0, response_generator_1.default)('found record', 200, product);
                        res.send(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        errResponse = (0, response_generator_1.default)(error_1.message, 500);
                        res.send(errResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllAction = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var products, response, error_2, errResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.bo.getAll()];
                    case 1:
                        products = _a.sent();
                        response = (0, response_generator_1.default)('found records', 200, products);
                        res.send(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        errResponse = (0, response_generator_1.default)(error_2.message, 500);
                        res.send(errResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.postAction = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var productData, added, response, error_3, errResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productData = req.body;
                        return [4 /*yield*/, this.bo.add(productData)];
                    case 1:
                        added = _a.sent();
                        response = (0, response_generator_1.default)('added successfully', 201, added);
                        res.send(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        errResponse = (0, response_generator_1.default)(error_3.message, 500);
                        res.send(errResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.putAction = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, productData, updated, response, error_4, errResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = Number(req.params.id);
                        productData = req.body;
                        return [4 /*yield*/, this.bo.update(productData, id)];
                    case 1:
                        updated = _a.sent();
                        response = (0, response_generator_1.default)('updated record', 201, updated);
                        res.send(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        errResponse = (0, response_generator_1.default)(error_4.message, 500);
                        res.send(errResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.deleteAction = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, deleted, response, error_5, errResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = Number(req.params.id);
                        return [4 /*yield*/, this.bo.remove(id)];
                    case 1:
                        deleted = _a.sent();
                        response = (0, response_generator_1.default)('deleted record', 201, deleted);
                        res.send(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        errResponse = (0, response_generator_1.default)(error_5.message, 500);
                        res.send(errResponse);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    ProductController = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(app_constants_1.default.PRODUCT_BO_TOKEN)),
        __metadata("design:paramtypes", [Object])
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map