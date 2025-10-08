import React, { useEffect, useState } from 'react';
import "./trending.css";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("trending.json")
      .then((response) => response.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/about/${id}`);
  };

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Apps</h1>
      <p className="trending-subtitle">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid">
        {apps.map((app) => (
          <div
            className="card"
            key={app.id}
            onClick={() => handleCardClick(app.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="card-image">
              <img src={app.image} alt={app.title} />
            </div>

            <div className="card-content">
              <h3 className="card-title">{app.title}</h3>
              <p className="card-company">{app.companyName}</p>
              <p className="card-desc">{app.description}</p>
            </div>

            <div className="card-footer">
              <span className="badge downloads">
                <img src="icon-downloads.png" alt="Downloads" />
                {(app.downloads / 1000000).toFixed(1)}M
              </span>
              <span className="badge reviews">
                <img src="icon-review.png" alt="Rating" />
                {app.ratingAvg}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="show-btn">Show All</button>
    </div>
  );
};

export default Trending;
