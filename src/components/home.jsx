import React from 'react';
import Banner from './banner/banner'
import States from './states/states'
import Trending from './trending/trending';
const home = () => {
    return (
        <div>
            <Banner />
      <States />
        <Trending />
        </div>
    );
};

export default home;