import React, { useEffect, useState } from 'react';
import "./alltheapps.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner"; 

const AllTheApps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("apps.json")
      .then((response) => response.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/about/${id}`);
  };


  useEffect(() => {
    if (searchTerm.trim() === "") return;
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }); 
    return () => clearTimeout(timer);
  }, [searchTerm]);

 
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="allapps-container">
      <div className="headings">
        <h1>Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      
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

     
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      ) : (
        <div className="grid">
          {filteredApps.map((app) => (
            <div
              className="card"
              key={app.id}
              onClick={() => handleCardClick(app.id)}
              
            >
              <div className="card-image">
                <img src={app.image} alt={app.title} />
              </div>

              <div className="card-content">
                <h3 className="card-title">{app.title}</h3>


                <p className="card-company">{app.companyName}</p>
               
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
      )}

      <button className="show-btn">Show All</button>
    </div>
  );
};

export default AllTheApps;
