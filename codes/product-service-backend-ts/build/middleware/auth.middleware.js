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
exports.AuthMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
var response_generator_1 = __importDefault(require("../utilities/response-generator"));
var inversify_1 = require("inversify");
(0, dotenv_1.config)();
var secretKey = process.env.SECRET_KEY || 'SECRET-KEY';
var AuthMiddleware = /** @class */ (function () {
    function AuthMiddleware() {
        this.createToken = function (user) {
            var payload = { subject: user.username };
            var token = (0, jsonwebtoken_1.sign)(payload, secretKey, { expiresIn: 600 });
            return token;
        };
        this.verifyToken = function (req, res, next) {
            var response = '';
            try {
                if (!req.headers.authorization) {
                    response = (0, response_generator_1.default)('no authorization header', 401);
                    return res.send(response);
                }
                else {
                    var token = req.headers.authorization.replace('Bearer ', '');
                    if (!token) {
                        response = (0, response_generator_1.default)('no token found', 401);
                        return res.send(response);
                    }
                    else {
                        try {
                            var payload = (0, jsonwebtoken_1.verify)(token, secretKey);
                            if (!payload) {
                                response = (0, response_generator_1.default)('no payload found:unauthorized request', 401);
                                return res.send(response);
                            }
                            else {
                                console.log(payload);
                                req.params.userId = payload.subject;
                            }
                        }
                        catch (err) {
                            console.log(err);
                            response = (0, response_generator_1.default)('invalid token', 401);
                            return res.send(response);
                        }
                    }
                }
                next();
            }
            catch (error) {
                response = (0, response_generator_1.default)(error.message, 401);
                return res.send(response);
            }
        };
    }
    AuthMiddleware = __decorate([
        (0, inversify_1.injectable)()
    ], AuthMiddleware);
    return AuthMiddleware;
}());
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map