const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user object
    user = new User({ name, email, password });

    // Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Generate a JSON Web Token (JWT)
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.MY_SECRET_KEY, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Login an existing user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate a JSON Web Token (JWT)
    const payload = { user: { id: user.id } };
    console.log("Secret Key:", process.env.MY_SECRET_KEY);
    const token = jwt.sign(payload, process.env.MY_SECRET_KEY, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
