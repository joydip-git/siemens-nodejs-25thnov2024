"use strict";

var _productmanager = _interopRequireDefault(require("./services/productmanager"));
var _product = _interopRequireDefault(require("./models/product"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var manager = new _productmanager["default"]();
var addedProduct = manager.add(new _product["default"](6, 'dell xps 15', 'dell-1234', '11/12/2024', 'new 15 inch laptop from dell', 120000, 4.5, 'https://openclipart.org/image/800px/5012'));
console.log(addedProduct ? addedProduct : 'not added');