const router = require("express").Router();
const productModel = require("../models/products/productModel");
const auth = require("../authentication/auth");

router.get("/", productModel.getProducts);
router.get("/:id", productModel.getOneProduct);

router.use(auth.verifyToken);

router.post("/new", productModel.newProduct);

router.patch("/:id", productModel.updateProduct);

router.delete("/:id", productModel.deleteProduct);

module.exports = router;
