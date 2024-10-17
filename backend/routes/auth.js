const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { name, number, email, password, username } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({
      $or: [{ email }, { number }, { username }],
    });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user object
    user = new User({ name, email, number, password, username });

    // Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    console.log("hashed password:", user.password);

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
  console.log("Login Request:", req.body);
  const { identifier, password } = req.body; // Single field for identifier

  try {
    // Determine the type of identifier (email, phone number, or username)
    let user;
    if (/\S+@\S+\.\S+/.test(identifier)) {
      // Check if identifier is an email
      user = await User.findOne({ email: identifier });
    } else if (/^\d+$/.test(identifier)) {
      // Check if identifier is a phone number (digits only)
      user = await User.findOne({ number: identifier });
    } else {
      // Otherwise, assume it's a username
      user = await User.findOne({ username: identifier });
    }

    // Check if user exists
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch for user:", identifier);
      return res.status(400).json({ msg: "Invalid password" });
    }

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

module.exports = router;
