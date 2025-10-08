import React, { useEffect, useState } from 'react';
import "./trending.css";



import { useNavigate } from "react-router-dom";

const Trending = () => {

  const [trendyyapps, setApps] = useState([]);
  

  useEffect(() => {
    fetch("trending.json")
      .then((response) => response.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  const navigate = useNavigate();


  const shoeDstails = (id) => {
    navigate(`/about/${id}`);
  };

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Apps</h1>


      <p className="trending-paragraph">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid">
        {trendyyapps.map((taap) => (
          <div
            className="card"
            key={taap.id}
            onClick={() => shoeDstails(taap.id)}
            
          >
            <div className="card-image">
              <img src={taap.image} alt={taap.title} />
            </div>

            <div className="card-content">
              <h3 className="card-title">{taap.title}</h3>

              <p className="card-company">{taap.companyName}</p>


              
            </div>

            <div className="card-footer">
              <span className="badge downloads">
                <img src="icon-downloads.png" alt="" />
                {(taap.downloads / 1000000).toFixed(1)}M
              </span>
              <span className="badge reviews">



                <img src="icon-review.png" alt="" />

                {taap.ratingAvg}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="all">
        Show All</button>
    </div>
  );
};

export default Trending;
