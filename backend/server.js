const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./database"); // Import the database connection file
const cors = require("cors"); // To handle cross-origin requests
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

const app = express();
dotenv.config();

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

connectDB();

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("CheaperData API is running");
});

// Use the auth routes
app.use("/api/auth", authRoutes);

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
