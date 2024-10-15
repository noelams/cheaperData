import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup({ onAuthSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      onAuthSuccess();
      navigate("/subscription");
    } catch (error) {
      if (error.response) {
        // If the error has a response (like 400 or 500 from the server), log the actual error message
        console.error("Signup failed:", error.response.data);
      } else if (error.request) {
        // If the request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        require
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
