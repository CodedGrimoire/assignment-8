import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <h1>
                We Build <span className="purple-thing">Productive</span> Apps
            </h1>
            <p>
                At HERO.IO , we craft innovative apps designed to make everyday life 
                simpler, smarter, and more exciting. Our goal is to turn your ideas 
                into digital experiences that truly make an impact.
            </p>
            <div className="buttons-sideby">
                <button className="banner-btn"> <a href="https://play.google.com/store/games?hl=en&pli=1"  target="_blank"
    rel="noopener noreferrer"> Google Play</a></button>


                <button className="banner-btn"><a href="https://www.apple.com/app-store/"  target="_blank"
    rel="noopener noreferrer">App Store</a></button>
            </div>
            <img src="hero.png" alt="Hero Banner" className="hero-img" />
        </div>
    );
};

export default Banner;
