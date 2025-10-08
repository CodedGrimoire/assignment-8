import React, { useEffect, useState } from 'react';
import "./alltheapps.css";

const AllTheApps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("apps.json")
      .then((response) => response.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  // Filter apps based on search
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="allapps-container">
      <div className="headings">
        <h1>Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      {/* Count + Search */}
      <div className="number_search">
        <h3>{filteredApps.length} Apps Found</h3>
        <input
          type="text"
          placeholder="Search Apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Grid */}
      <div className="grid">
        {filteredApps.map((app) => (
          <div className="card" key={app.id}>
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

export default AllTheApps;
