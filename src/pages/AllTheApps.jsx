import React, { useEffect, useState } from "react";
import "./alltheapps.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

export default function AllTheApps() {
  const [searchTerm, setSearchTerm] = useState("");


  const [loading, setLoading] = useState(true); 
  const [apps, setApps] = useState([]);

  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch(() => setApps([]))

      .finally(() => setLoading(false));
  }, []);

  


  useEffect(() => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300); 
    return () => clearTimeout(t);
  }, [searchTerm]);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );




  const gotoDetailspage = (id) => navigate(`/about/${id}`);

  return (
    <div className="allapps-container">
     


      <div className="headings">
        <h1>Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

     
      <div className="number_search">
        <h3 className="jqhj">{filteredApps.length || apps.length} Apps Found</h3>




        <input
          type="text"
          placeholder="Search for Apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      
      {loading ? (
        <div className="flex justify-center items-center py-10">

          
          <Spinner />
        </div>
      ) : filteredApps.length === 0 ? (
         <div className="no-results">
           <img src="/App-Error.png" alt="" className="no-results-img" />

           <button onClick={() => setSearchTerm("")} className="show-btn">Show All</button>
</div>

        
      ) : (
        <div className="grid">
          {filteredApps.map((app) => (
            <div
              className="card"
              key={app.id}


              onClick={() => gotoDetailspage(app.id)}
            >
              <div className="card-image">
                <img src={app.image} alt="" />
              </div>



              <div className="card-content">
                <h3 className="card-title">{app.title}</h3>

                
                <p className="card-company">{app.companyName}</p>
              </div>

              <div className="card-footer">
                <span className="badge downloads">
                  <img src="/icon-downloads.png" alt="" />
                  {(app.downloads / 1_000_000).toFixed(1)}M
                </span>

                <span className="badge reviews">
                  <img src="/icon-review.png" alt="" />
                  {app.ratingAvg}



                </span>
              </div>
            </div>
          ))}
        </div>
      )} </div>
   
  );
}