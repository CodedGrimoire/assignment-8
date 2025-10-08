import React from "react";
import "./footer.css";

import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
    

      <div className="footer-left">
        <img src="./logo.png" alt="HERO.IO Logo" className="footer-logo" />
        <span className="brand">HERO.IO</span>
      </div>

     
      <div className="footer-right">
        <h4>Social Links</h4>
        <div className="social-icons">
          <a href="" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>

    


      <div className="footer-bottom">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
