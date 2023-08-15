const express = require("express");
const router = express.Router();

router.get("/login", (req, resp) => {
  resp.render("login.hbs");
});
router.get("/register", (req, resp) => {
  resp.render("register.hbs");
});

module.exports = router;
