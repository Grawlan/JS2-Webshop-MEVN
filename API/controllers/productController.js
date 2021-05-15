const router = require("express").Router();
const { Router } = require("express");
const productModel = require("../models/products/productModel");

router.get("/", productModel.getProducts);
router.get("/:id", productModel.getOneProduct);

router.post("/new", productModel.newProduct);

router.patch("/:id", productModel.updateProduct);

router.delete("/:id", productModel.deleteProduct);

module.exports = router;
