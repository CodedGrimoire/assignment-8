import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Download, Star, MessageSquare } from "lucide-react";
import "./about.css";





import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {

  const [installed, isItInstalled] = useState(false);


  
  const [app, setApp] = useState(null);

  const { id } = useParams();
  

 
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {

        const foundApp = data.find((item) => item.id === parseInt(id));
        setApp(foundApp);

        

        

        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];


        if (foundApp && installedApps.includes(foundApp.id)) {


          isItInstalled(true);
        }
      });
  }, [id]);

  if (!app) {
    return <p className="loading">Loading app details...</p>;
  }





 const ratingsDataforgraph = app.ratings.slice().reverse().map((rate) => ({
  name: rate.name,
  count: rate.count,
}));


  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);


      localStorage.setItem("installedApps", JSON.stringify(installedApps));

      isItInstalled(true);


      toast.success("App Installed Successfully!", {
        position: "top-right",
        autoClose: 2010,
        hideProgressBar: false,

        closeOnClick: true,

        pauseOnHover: true,
        draggable: false,
        style: {
          fontSize: "17px",


          minWidth: "221px",
        },
      });
    }
  };

  

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-left">


          <img src={`/${app.image}`} alt="" className="about-img" /></div>


        
        <div className="about-right">


          <h2 className="about-title">{app.title}</h2>
          <p className="about-company">Developed by {app.companyName}</p>

          <div className="about-stats">


            <div className="stat">
              <Download className="stat-icon green" />


              <span>
                <strong>{(app.downloads / 1000000).toFixed(0)}M</strong>
                <br />


                Downloads </span>
             
            </div>
            <div className="stat">

              <Star className="stat-icon orange" />
              <span>
                <strong>{app.ratingAvg}</strong>
                <br />
                Avg Rating
              </span>
            </div>
            <div className="stat">
              <MessageSquare className="stat-icon purple" />
              <span>
                <strong>{(app.reviews / 1000).toFixed(0)}K</strong>
                <br />
                Reviews
              </span>
            </div>


          </div>

          <button
            className="install-btn"
            disabled={installed}
            onClick={handleInstall}
          >


            {installed ? "Installed" : `Install Now (${app.size} MB)`}</button>

          
        </div>
      </div>

      <div className="ratings-section">
        <h3>Ratings</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={ratingsDataforgraph}
            layout="vertical"
            margin={{ left: 41, right: 23 }}
          >
            <XAxis type="number" hide />

            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" barSize={21} />
          </BarChart>

        </ResponsiveContainer>
      </div>

      <div className="description-section">
        <h3>Description</h3>
        <p>{app.description}</p>
      </div>

     
      <ToastContainer />
    </div>
  );
};

export default About;
