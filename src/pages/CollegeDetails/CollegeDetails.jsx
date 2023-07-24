import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './CollegeDetails.css';

const CollegeDetails = () => {
    const products = useLoaderData();
    const {id} = useParams();
    const [college, setCollege] = useState([]);

    const {college_image, college_name, admission_process, events_details, sports_categories, research_history} = college;

    useEffect(() => {
        const productFind = products.find(product => product.id == id);
        setCollege(productFind);
    }, []);

    return (
        <div className='job-container pt-28 mb-10'>
            <div className='details-des mx-10'>
                <p className='py-4 job-description'><span className='font-bold text-slate-700'>College Name</span>: {college_name}</p>
                <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Admission Process</span>: {admission_process}</p>
                {/* <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Events Details</span>: {events_details}</p> */}
                <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Research History</span>: {research_history}</p>
                <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Sports Categories</span>: {sports_categories}</p>
            </div>
            <div>
                <div className='job-cart py-4 px-6'>
                    <h6 className='text-2xl font-bold text-center mb-4'>College Image</h6>
                    <img className="w-full" src={college_image} alt={college_name} />
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;