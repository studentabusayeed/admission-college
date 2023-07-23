import React from 'react';
import PopularCollege from '../PopularCollege/PopularCollege';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import AllTestimonial from '../AllTestimonial/AllTestimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PopularCollege></PopularCollege>
            <AllTestimonial></AllTestimonial>
        </div>
    );
};

export default Home;