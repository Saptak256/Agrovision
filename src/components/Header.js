// src/components/Header.js
import React from "react";
import './Header.css'; // Ensure this path is correct
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>AI Disease Detection</h1>
      </div>

      <div className="nav-container">
        <nav className="nav-links">
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
            <li><NavLink to="/how-it-works" className={({ isActive }) => (isActive ? "active" : "")}>How It Works</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>FAQ</NavLink></li>
            
          </ul>
        </nav>
      </div>

      <div className="auth-buttons">
        
        <button onClick={handleLogin} className="login-btn">Login</button>
        <button onClick={handleSignup} className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
