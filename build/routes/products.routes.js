"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
var router = (0, _express.Router)();
router.post('/', _products.createProducts);
router.get('/', _products.getProducts);
router.get('/:productId', _products.getProductById);
router.put('/:productId', _products.updateProductById);
router["delete"]('/:productId', _products.deleteProductById);
var _default = exports["default"] = router;