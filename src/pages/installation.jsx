import React, { useEffect, useState } from "react";
import "./installation.css";
import { Download, Star } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const installedIds = JSON.parse(localStorage.getItem("installedApps")) || [];
        const installedApps = data.filter((app) => installedIds.includes(app.id));
        setApps(installedApps);
      });
  }, []);

  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);

    const installedIds = JSON.parse(localStorage.getItem("installedApps")) || [];
    localStorage.setItem(
      "installedApps",
      JSON.stringify(installedIds.filter((i) => i !== id))
    );

    toast.success("App Uninstalled Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        fontSize: "14px",
        minWidth: "220px",
      },
    });
  };

  const sortedApps = [...apps].sort((a, b) =>
    sortOrder === "high-low" ? b.downloads - a.downloads : a.downloads - b.downloads
  );

  return (
    <div className="installation-container">
      <div className="installation-header">
        <h1>Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
        <div className="installation-topbar">
          <span>{apps.length} Apps Found</span>
          <select
            className="sort-dropdown"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="high-low">Sort by Downloads: High → Low</option>
            <option value="low-high">Sort by Downloads: Low → High</option>
          </select>
        </div>
      </div>

      <div className="installation-list">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div key={app.id} className="installation-card">
              <img src={`/${app.image}`} alt={app.title} className="installation-img" />
              <div className="installation-info">
                <h3>{app.title}</h3>
                <div className="installation-meta">
                  <span className="downloads">
                    <Download className="icon green" />
                    {(app.downloads / 1000000).toFixed(1)}M
                  </span>
                  <span className="rating">
                    <Star className="icon orange" />
                    {app.ratingAvg}
                  </span>
                  <span className="size">{app.size} MB</span>
                </div>
              </div>
              <button
                className="uninstall-btn"
                onClick={() => handleUninstall(app.id)}
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="no-apps">No apps installed.</p>
        )}
      </div>

      
      <ToastContainer />
    </div>
  );
};

export default Installation;
