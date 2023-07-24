import React from 'react';
import './AllCollege.css';
import { Link } from 'react-router-dom';

const AllCollege = ({ item }) => {
    return (
        <div className="card card-compact w-80 bg-base-400 shadow-xl class-img">
            <figure><img src={item.college_image} alt={item.college_name} /></figure>
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">College Name:{item.college_name}</div>
                <p className="text-gray-700 text-[14px] font-semibold mb-2">Admission Dates: {item.admission_dates}</p>
                <p className="text-gray-700 font-semibold text-base mb-2">Events: {item.events.map((singled, index) => <ul className=" text-[14px] font-semibold inline-block" key={index}> {singled},</ul>)}</p>
                <p className="text-gray-700 font-semibold text-[14px] mb-2">Research History: {item.research_history}</p>
                <p className="text-gray-700 text-[14px] font-semibold">Sports: {item.sports_categories.map((sport,index) => <ul className="inline-block" key={index}>{sport},</ul>)}</p>
                <Link to={`/details/${item.id}`}><button className='btn btn-success text-slate-100 mt-2'>Details</button></Link>
            </div>
        </div>
    );
};

export default AllCollege;