"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.getProducts = exports.getProductById = exports.deleteProductById = exports.createProducts = void 0;
var _Products = _interopRequireDefault(require("../models/Products"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var createProducts = exports.createProducts = function createProducts(req, res) {
  res.json('creating product');
};
var getProducts = exports.getProducts = function getProducts(req, res) {
  res.json('Get Products');
};
var getProductById = exports.getProductById = function getProductById(req, res) {};
var updateProductById = exports.updateProductById = function updateProductById(req, res) {};
var deleteProductById = exports.deleteProductById = function deleteProductById(req, res) {};