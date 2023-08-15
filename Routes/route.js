const express = require("express");
const { getAllCategories } = require("../controller/categoryController");
const { getAllProducts, getAllProductsindex } = require("../controller/productController");
const { checkAuth } = require("../middleware/authenticationMissleware");
const router = express.Router();

router.get("/",  getAllProductsindex);
router.get("/cart",  (req, resp) => {
  resp.render("cart.hbs");
});

router.get("/login", (req, resp) => {
  resp.render("login.hbs");
});
router.get("/register", (req, resp) => {
  resp.render("register.hbs");
});
router.get("/register-product", checkAuth, (req, resp) => {
  resp.render("dashboard-product-add.hbs");
});
router.get("/register-category",checkAuth, (req, resp) => {
  resp.render("dashboard-category-add.hbs");
});
router.get("/dashboard-category",checkAuth, getAllCategories);
router.get("/dashboard-product",checkAuth, getAllProducts);


module.exports = router;
