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
                <button className="banner-btn">Google Play</button>
                <button className="banner-btn">App Store</button>
            </div>
            <img src="hero.png" alt="Hero Banner" className="hero-img" />
        </div>
    );
};

export default Banner;
