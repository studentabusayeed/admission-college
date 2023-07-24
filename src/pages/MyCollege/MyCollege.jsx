import React, { useContext, useEffect, useState } from 'react';
import CollegeReview from '../CollegeReview/CollegeReview';
import { AuthContext } from '../../providers/AuthProvider';

const MyCollege = () => {

    const [users, setUsers] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://admission-college-server-studentabusayeed.vercel.app/student?email=${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                setUsers(result);
            });
    }, []);

    return (
        <div className='bg-slate-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center bg-slate-100 px-20 py-28 rounded'>
                {
                    users.map(item => <CollegeReview
                        key={item._id}
                        item={item}
                    ></CollegeReview>)
                }
            </div>
        </div>
    );
};

export default MyCollege;