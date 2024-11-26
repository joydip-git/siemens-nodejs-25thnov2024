"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _filehandler = require("../dao/filehandler");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //import { products } from "../repository/products";
var ProductManager = /*#__PURE__*/function () {
  function ProductManager() {
    _classCallCheck(this, ProductManager);
  }
  return _createClass(ProductManager, [{
    key: "getAll",
    value: function getAll() {
      try {
        var products = (0, _filehandler.readData)();
        return products;
      } catch (error) {
        throw error;
      }
    }
  }, {
    key: "get",
    value: function get(id) {
      try {
        var products = (0, _filehandler.readData)();
        var found = products.find(function (p) {
          return p.productId === id;
        });
        if (found) return found;else throw new Error("no product with id:".concat(id, " found..."));
      } catch (error) {
        throw error;
      }
    }
  }, {
    key: "add",
    value: function add(product) {
      try {
        var products = (0, _filehandler.readData)();
        var found = products.find(function (p) {
          return p.productId === product.productId;
        });
        if (found) throw new Error("a product with same id (".concat(product.productId, ") exists already..."));
        products.push(product);
        if ((0, _filehandler.writeData)(products)) return product;else throw new Error('could not add data');
      } catch (error) {
        throw error;
      }
    }
  }, {
    key: "update",
    value: function update(id, product) {
      try {
        var products = (0, _filehandler.readData)();
        var foundIndex = products.findIndex(function (p) {
          return p.productId === id;
        });
        if (foundIndex < 0) throw new Error("a product with same id (".concat(product.productId, ") does not exist.."));
        var updatable = _objectSpread(_objectSpread({}, product), {}, {
          productId: id
        });
        products.splice(foundIndex, 1, updatable);
        if ((0, _filehandler.writeData)(products)) return updatable;else throw new Error('could not update data');
      } catch (err) {
        throw err;
      }
    }
  }, {
    key: "remove",
    value: function remove(id) {
      try {
        var products = (0, _filehandler.readData)();
        var foundIndex = products.findIndex(function (p) {
          return p.productId === id;
        });
        if (foundIndex < 0) throw new Error("a product with same id (".concat(product.productId, ") does not exist.."));
        var found = products[foundIndex];
        products.splice(foundIndex, 1);
        if ((0, _filehandler.writeData)(products)) return found;else throw new Error('could not delete data');
      } catch (error) {
        throw err;
      }
    }
  }]);
}();
var _default = exports["default"] = ProductManager;