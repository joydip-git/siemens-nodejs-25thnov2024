"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const tokens_1 = require("./tokens");
const dataservice_1 = require("./dataservice");
const implementation_1 = require("./implementation");
const appcontainer = new inversify_1.Container();
appcontainer.bind(tokens_1.SERVICE_TOKENS.DATA_SERVICE_TOKEN).to(dataservice_1.DataService);
appcontainer.bind(tokens_1.SERVICE_TOKENS.OPERATIONS_SERVICE_TOKEN).to(implementation_1.Implementation);
exports.default = appcontainer;
