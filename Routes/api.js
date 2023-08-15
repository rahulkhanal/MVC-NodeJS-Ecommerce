const express = require("express");
const router = express.Router();
const { registerUserWithoutHashing } = require("../controller/userController");

router.post("/add-user", registerUserWithoutHashing);

module.exports = router;
