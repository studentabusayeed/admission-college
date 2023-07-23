import React, { useState } from 'react';
import AllCollege from '../AllCollege/AllCollege';

const PopularCollege = () => {
    const [users, setUsers] = useState([]);
    fetch('data.json')
    .then(res => res.json())
    .then(data => setUsers(data));
    return (
        <div className='bg-slate-100 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center my-5 bg-slate-100 p-20 rounded'>
                {
                    users.slice(0, 3).map(item => <AllCollege key={item._id} item={item}></AllCollege>)
                }
            </div>
        </div>
    );
};

export default PopularCollege;