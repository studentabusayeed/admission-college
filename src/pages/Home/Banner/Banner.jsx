import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../../../assets/slider/slider1.jpg';
import slide2 from '../../../assets/slider/slider2.jpg';
import slide3 from '../../../assets/slider/slider3.jpg';
import slide4 from '../../../assets/slider/slider4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[650px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-2/3 pl-12'>
                        <h2 className='text-4xl font-bold'>Harvard University Cambridge</h2>
                        <p>Harvard University is the oldest university in the United States.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Arizona State University Tempe</h2>
                        <p>Arizona State University's ranking in the 2022-2023 edition of Best Colleges is National Universities.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Northeastern University Boston</h2>
                        <p>Northeastern University is home to one of the largest international student communities in the United States.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slide4} className="w-full" />
                <div className="absolute rounded-xl flex items-center h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-4xl font-bold'>Stanford University Stanford</h2>
                        <p>The primary criterion for admission to Stanford is academic excellence.</p>
                        <div>
                            <button className="btn btn-success mr-5">More Information</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;