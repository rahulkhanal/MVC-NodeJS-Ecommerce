const User = require("../model/user");

// Register User
exports.registerUser = async (req, res) => {
  try {
    // Validate user input
    // Hash password using bcrypt before saving

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: "user",
    });

    await newUser.save();
    res.redirect("/login"); // Redirect to login page
  } catch (error) {
    // Handle error
  }
};

// Login User
exports.loginUser = (req, res) => {
  // Implement passport authentication strategy here
};
