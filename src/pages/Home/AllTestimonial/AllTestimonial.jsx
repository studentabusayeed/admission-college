import React, { useState } from 'react';
import Testimonial from '../Testimonials/Testimonials';

const AllTestimonial = () => {
    const [users, setUsers] = useState([]);
    fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setUsers(data));
    return (
        <div className='bg-cyan-100 py-5'>
            <h3 className="text-center font-bold text-2xl">Customer Testimonials</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center bg-cyan-100 rounded justify-center mx-28 mt-10'>
                {
                    users.map(item => <Testimonial key={item.id} item={item}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default AllTestimonial;