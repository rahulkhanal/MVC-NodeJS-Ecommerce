const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // 'user' or 'admin'
});

const User = mongoose.model("User", userSchema);
module.exports = User;
