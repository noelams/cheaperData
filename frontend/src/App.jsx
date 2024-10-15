import "./App.css";
import Subscription from "../src/Components/Subcription";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import dotenv from "dotenv";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={<Signup onAuthSuccess={handleAuthSuccess} />}
        />
        <Route
          path="/login"
          element={<Login onAuthSuccess={handleAuthSuccess} />}
        />
        {isAuthenticated ? (
          <Route path="/subscription" element={<Subscription />} />
        ) : (
          <Route path="*" element={<Navigate to="/signup" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
