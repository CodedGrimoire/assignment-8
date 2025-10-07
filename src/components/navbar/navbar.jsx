import React from "react";
import "./navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo + Brand */}
      <div className="navbar-logo">
        <img src="./logo.png" alt="HERO.IO Logo" className="logo-img" />
        <span className="brand">HERO.IO</span>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li className="active">Home</li>
        <li>Apps</li>
        <li>Installation</li>
      </ul>

      {/* Button */}
      <div  className="navbar-btn">
      <button>
        <FaGithub className="btn-icon" /> Contribute
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
