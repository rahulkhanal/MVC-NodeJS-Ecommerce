const express = require("express");
const { getAllCategories } = require("../controller/categoryController");
const { getAllProducts } = require("../controller/productController");
const router = express.Router();

router.get("/login", (req, resp) => {
  resp.render("login.hbs");
});
router.get("/register-user", (req, resp) => {
  resp.render("register.hbs");
});
router.get("/register-product", (req, resp) => {
  resp.render("dashboard-product-add.hbs");
});
router.get("/register-category", (req, resp) => {
  resp.render("dashboard-category-add.hbs");
});
router.get("/dashboard-category", getAllCategories);
router.get("/dashboard-product", getAllProducts);


module.exports = router;
