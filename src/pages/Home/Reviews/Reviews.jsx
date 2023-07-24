import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";import Testimonial from "../Testimonial/Testimonial";
;

const Reviews = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://admission-college-server-studentabusayeed.vercel.app/review")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 bg-slate-100 px-8">
            <h3 className="text-center font-bold text-2xl">Customer Testimonials</h3>
            <div className="container mx-auto max-w-2xl mt-10">
                <Slider {...settings}>
                    {users.map((item) => (
                        <Testimonial key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;