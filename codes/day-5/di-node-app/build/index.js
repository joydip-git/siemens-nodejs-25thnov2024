"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appcontainer_1 = __importDefault(require("./appcontainer"));
const tokens_1 = require("./tokens");
const impl = appcontainer_1.default.get(tokens_1.SERVICE_TOKENS.OPERATIONS_SERVICE_TOKEN);
console.log(impl.add(12, 3));
