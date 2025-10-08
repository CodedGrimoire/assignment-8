import React from "react";
import "./navbar.css";
import { FaGithub } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo + Brand */}
      <div className="navbar-logo">
        <img src="./logo.png" alt="HERO.IO Logo" className="logo-img" />
        <span className="brand">HERO.IO</span>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/alltheapps" ? "active" : ""}>
          <Link to="/alltheapps">Apps</Link>
        </li>
        <li className={location.pathname === "/installation" ? "active" : ""}>
          <Link to="/installation">Installation</Link>
        </li>
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
