const Order = require("../models/Order");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.user._id, // Assuming you have the user info in req.user after authentication
      products: req.body.products,
    });

    await newOrder.save();
    res.redirect("/user/orders");
  } catch (error) {
    // Handle error
  }
};

// Read Orders by User
exports.getUserOrders = async (req, res) => {
  try {
    const userOrders = await Order.find({ user: req.user._id }).populate(
      "products.product"
    );
    res.render("userOrders", { userOrders });
  } catch (error) {
    // Handle error
  }
};

// Read All Orders (for Admin)
exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find().populate("user products.product");
    res.render("allOrders", { allOrders });
  } catch (error) {
    // Handle error
  }
};
