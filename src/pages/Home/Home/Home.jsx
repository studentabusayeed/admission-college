import React from 'react';
import PopularCollege from '../PopularCollege/PopularCollege';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PopularCollege></PopularCollege>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;