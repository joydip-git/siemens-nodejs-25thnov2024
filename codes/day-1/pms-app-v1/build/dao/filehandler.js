"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeData = exports.readData = void 0;
var _nodeFs = require("node:fs");
var writeData = exports.writeData = function writeData(data) {
  try {
    (0, _nodeFs.writeFileSync)('./data/products.json', data);
    return true;
  } catch (error) {
    throw error;
  }
};
var readData = exports.readData = function readData() {
  try {
    var data = (0, _nodeFs.readFileSync)('./data/products.json');
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};