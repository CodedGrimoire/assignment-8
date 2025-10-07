import React from "react";
import "./footer.css";
import { FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left: Logo */}
      <div className="footer-left">
        <img src="logo.png" alt="HERO.IO Logo" className="footer-logo" />
        <span className="brand">HERO.IO</span>
      </div>

      {/* Center: Text */}
      <div className="footer-center">
        <p>Copyright © 2025 - All right reserved</p>
      </div>

      {/* Right: Social links */}
      <div className="footer-right">
        <a href="#" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
