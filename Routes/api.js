const express = require("express");
const router = express.Router();
const { registerUserWithoutHashing } = require("../controller/userController");
const { addProduct } = require("../controller/productController");


router.post("/add-user", registerUserWithoutHashing);


//product
router.post("/add-product", addProduct);

//category


module.exports = router;
