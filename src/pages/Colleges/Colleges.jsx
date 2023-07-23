import React, { useState } from 'react';
import CollegeItem from '../CollegeItem/CollegeItem';

const Colleges = () => {
    const [users, setUsers] = useState([]);
    fetch('data.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    return (
        <div className='bg-slate-100 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded'>
                {
                    users.map(item => <CollegeItem key={item._id} item={item}></CollegeItem>)
                }
            </div>
        </div>
    );
};

export default Colleges;