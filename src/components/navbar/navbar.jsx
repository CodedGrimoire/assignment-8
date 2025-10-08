import React from "react";

import { FaGithub } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "./navbar.css";




const Navbar = () => {


  const location = useLocation();

  return (
    <nav className="navyy">
      
    <div className="logo-divv">
       <Link to="/" className="logoo-linkss">


  <img src="/logo.png" 
  alt="HERO.IO Logo" 

  className="logo-img" />

  <span style={{ color: "#7b3ef3", fontSize: "18px", fontWeight: "600" }}>
    HERO.IO
  </span></Link>
  
</div>



     
      <ul className="path-link">

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




      <div className="git-buttons">
          <a
href="https://github.com/CodedGrimoire"
    target="_blank"
    rel="noopener noreferrer"
  >




      <button className="git-button">
        
        
        <FaGithub className="gitcon" />
           <h3>Contribute</h3>
           
      </button></a></div>
  
      
      
      
    </nav>
  );
};

export default Navbar;
