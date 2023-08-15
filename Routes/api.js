const express = require("express");
const router = express.Router();
const { registerUserWithoutHashing } = require("../controller/userController");
const { addProduct, deleteProductById } = require("../controller/productController");
const {
  addCategory,
  deleteCategoryById,
  getAllCategories,
  readAllCategories,
} = require("../controller/categoryController");
const { auth } = require("../controller/auth");

router.post("/add-user", registerUserWithoutHashing);

//product
router.post("/add-product", addProduct);
router.delete("/delete-product/:id", deleteProductById);


//category
router.post("/add-category", addCategory);
router.delete("/delete-category/:id", deleteCategoryById);
router.get("/read-category", readAllCategories);

//auth
router.post("/user-login",auth)

module.exports = router;
