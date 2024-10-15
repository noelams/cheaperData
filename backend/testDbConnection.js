const mongoose = require("mongoose");
const connectDB = require("./database");

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    mongoose.connection.close(); // Close the connection after testing
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
