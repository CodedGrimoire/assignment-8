import React from "react";
import "./states.css";

const States = () => {
  return (
    <section className="states">
      <h1>Trusted By Millions, Built For You</h1>
      <div className="states-container">
        {/* Total Downloads */}
        <div className="state-box">
          <h2>29.6M</h2>
          <p>Total Downloads</p>
          <span>21% More Than Last Month</span>
        </div>

        {/* Total Reviews */}
        <div className="state-box">
          <h2>906K</h2>
          <p>Total Reviews</p>
          <span>46% More Than Last Month</span>
        </div>

        {/* Active Apps */}
        <div className="state-box">
          <h2>132+</h2>
          <p>Active Apps</p>
          <span>31 More Will Launch</span>
        </div>
      </div>
    </section>
  );
};

export default States;
