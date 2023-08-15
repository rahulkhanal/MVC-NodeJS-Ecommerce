const express = require("express");
const router = express.Router();

router.get("/login", (req, resp) => {
  resp.render("login.hbs");
});
router.get("/register-user", (req, resp) => {
  resp.render("register.hbs");
});
router.get("/reigster-product", (req, resp) => {
  resp.render("dashboard-product.hbs");
});

module.exports = router;
