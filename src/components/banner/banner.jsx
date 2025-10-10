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
        <a
          className="banner-btn"
          href="https://play.google.com/store/games?hl=en&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Google Play</span>
          <img src="/google-play.png" alt="" className="store-icon" />
        </a>

        <a
          className="banner-btn"
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>App Store</span>
          <img src="/app-store.png" alt="" className="store-icon" />
        </a>
      </div>
            <img src="hero.png" alt="" className="hero-img" />
        </div>
    );
};

export default Banner;
