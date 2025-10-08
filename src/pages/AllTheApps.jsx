import React, { useEffect, useState } from "react";
import "./alltheapps.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx"; // adjust if your path differs

export default function AllTheApps() {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // show spinner until fetch completes
  const navigate = useNavigate();

  // fetch apps
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch(() => setApps([]))
      .finally(() => setLoading(false));
  }, []);

  // simulate a short “searching” spinner while typing
  useEffect(() => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const filtered = apps.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDetails = (id) => navigate(`/about/${id}`);

  if (loading) {
    return (
      <div className="allapps-container">
        <div className="headings">
          <h1>Our All Applications</h1>
          <p>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className="number_search">
          <h3>{filtered.length || apps.length} Apps Found</h3>
          <input
            type="text"
            placeholder="Search Apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>

        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="allapps-container">
      <div className="headings">
        <h1>Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="number_search">
        <h3>{filtered.length} Apps Found</h3>
        <input
          type="text"
          placeholder="Search Apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="no-apps">No apps match your search.</p>
      ) : (
        <div className="grid">
          {filtered.map((app) => (
            <div
              className="card"
              key={app.id}
              onClick={() => openDetails(app.id)}
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
                  <img src="/icon-downloads.png" alt="Downloads" />
                  {(app.downloads / 1_000_000).toFixed(1)}M
                </span>
                <span className="badge reviews">
                  <img src="/icon-review.png" alt="Rating" />
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
}
