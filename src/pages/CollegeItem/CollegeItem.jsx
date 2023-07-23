import React from 'react';
import './CollegeItem.css';
import { Link } from 'react-router-dom';

const CollegeItem = ({ item }) => {
    return (
        <div className="card card-compact w-80 bg-base-400 shadow-xl class-img">
            {/* <img className="w-full" src={item.college_image} alt={item.college_name} /> */}
            <figure><img src={item.college_image} alt={item.college_name} /></figure>
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">College Name:{item.college_name}</div>
                <p className="text-gray-700 text-base mb-2"><span className='font-semibold'>Admission Dates:</span> {item.admission_dates}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-semibold'>Events:</span> {item.events}</p>
                <p className="text-gray-700 text-base mb-4"><span className='font-semibold'>Research History:</span> {item.events} {item.research_history}</p>
                <p className="text-gray-700 text-base"><span className='font-semibold'>Sports Categories:</span> {item.sports_categories}</p>
                <Link to={`/details/${item.id}`}><button className='btn btn-success text-slate-100 mt-2'>Details</button></Link>
            </div>
        </div>
    );
};

export default CollegeItem;