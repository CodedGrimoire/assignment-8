import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const AppNotFound = () => {
  return (
    <div className="error-container">
      <img src="/app-not-found.png" alt="App Not Found" className="error-img" />
      <h2 className="error-title">OPPS!! APP NOT FOUND</h2>
      <p className="error-subtitle">
        The app you are requesting is not found on our system. Please try another app.
      </p>
      <Link to="/alltheapps" className="error-btn">Go Back!</Link>
    </div>
  );
};

export default AppNotFound;
