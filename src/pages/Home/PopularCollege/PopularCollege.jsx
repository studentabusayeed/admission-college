import React, { useState } from 'react';
import AllCollege from '../AllCollege/AllCollege';

const PopularCollege = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const filteredEngineers = users.filter((enginee) => {
        const lowercaseSearch = search.toLowerCase();
        return (
            lowercaseSearch === "" ||
            enginee.college_name.toLowerCase().includes(lowercaseSearch) ||
            enginee.admission_dates.toLowerCase().includes(lowercaseSearch)
        );
    });

    fetch('data.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    return (
        <div className='bg-slate-100 py-5'>
            <div className="flex items-center justify-center gap-2 mt-10 mb-12">
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by college name or admission date"
                    className="input  border-2 border-[#c084fc]  md:w-[600px] py-2 px-2"
                />
                <button className="inline-block px-12 py-3 btn btn-success text-slate-100">
                    Find College
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded'>
                {
                    filteredEngineers.slice(0, 3).map(item => <AllCollege key={item._id} item={item}></AllCollege>)
                }
            </div>
        </div>
    );
};

export default PopularCollege;