const Product = require("../models/Product");

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
    });

    await newProduct.save();
    res.redirect("/products");
  } catch (error) {
    // Handle error
  }
};

// Read Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.render("products", { products });
  } catch (error) {
    // Handle error
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
    });
    res.redirect("/products");
  } catch (error) {
    // Handle error
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (error) {
    // Handle error
  }
};
