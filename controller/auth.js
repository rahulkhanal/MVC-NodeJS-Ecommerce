const User = require("../model/user");

exports.auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      const userId = user._id;
      res.cookie("user", user);
      res.json({ message: "Logged in successfully" });
      console.log("Loggedin");
    } else {
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
