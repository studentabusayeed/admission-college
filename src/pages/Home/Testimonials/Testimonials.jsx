import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';
const Testimonial = ({ item }) => {
    return (
        <div className='mb-4'>
            <section className="testimonial-section bg-cyan-100">
                <div>
                    <div className="testimonial">
                        <p className="text-1xl font-semibold p-4 text-success">{item.textarea}</p>
                        <div className="tests flex">
                            <div className="test ml-5">
                                <h4 className="font-semibold text-2xl text-start">Name: {item.candidateName}</h4>
                            </div>
                            <p className='text-1xl font-semibold text-start'>Rating: {item.number}<FaStar className='text-warning inline ml-2' /></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonial;