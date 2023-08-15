const express = require("express");
const router = express.Router();
const { registerUserWithoutHashing } = require("../controller/userController");
const { addProduct } = require("../controller/productController");
const {
  addCategory,
  deleteCategoryById,
} = require("../controller/categoryController");

router.post("/add-user", registerUserWithoutHashing);

//product
router.post("/add-product", addProduct);

//category
router.post("/add-category", addCategory);
router.delete("/delete-category/:id", deleteCategoryById);

module.exports = router;
