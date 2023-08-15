const Category = require("../model/category");

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
      description: req.body.description,
    });

    await newCategory.save();
    res.redirect("/categories");
  } catch (error) {
    // Handle error
  }
};

// Read Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories", { categories });
  } catch (error) {
    // Handle error
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
    });
    res.redirect("/categories");
  } catch (error) {
    // Handle error
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect("/categories");
  } catch (error) {
    // Handle error
  }
};
