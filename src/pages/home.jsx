import React from 'react';
import Banner from '../components/banner/banner'
import States from '../components/states/states'
import Trending from '../components/trending/trending';
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