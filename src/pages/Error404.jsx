import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <img src="/error-404.png" alt="" className="error-img" />


      <h2 className="error-title">Oops, page not found!</h2>
      <p className="error-subtitle">

        
        The page you are looking for is not available.
      </p>
      <Link to="/" className="error-btn">Go Back!</Link>
    </div>
  );
};

export default Error404;
