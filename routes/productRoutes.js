const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controller/productControllers");


router.post("/addproduct", addProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
