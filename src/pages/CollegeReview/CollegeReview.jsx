import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const CollegeReview = ({ item }) => {
    const { collegeName, address, candidateEmail, candidateName, candidatePhone, dateOfBirth, imgURL, subject, _id } = item;
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const textarea = form.textarea.value;

        const reviewInfo = {
            textarea,
            candidateName
        }
        console.log(reviewInfo);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setLoading(false);
                }
            })
    }

    return (
        // <div className='job-container pt-28 pb-10'>
        //     <div className='details-des mx-10 border px-14 py-6 bg-slate-200'>
        //         <p className='py-4 job-description'><span className='font-bold text-slate-700'>College Name</span>: {collegeName}</p>
        //         <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Candidate Name</span>: {candidateName}</p>
        //         {/* <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Events Details</span>: {events_details}</p> */}
        //         <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Candidate Email</span>: {candidateEmail}</p>
        //         <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Candidate Phone</span>: {candidatePhone}</p>
        //         <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Subject</span>: {subject}</p>
        //         <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Date Of Birth</span>: {dateOfBirth}</p>
        //         <p className='mb-4 job-description'><span className='font-bold text-slate-700'>Address</span>: {address}</p>
        //         <div>
        //             <form onSubmit=''>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <h4 className="font-bold text-2xl">Review</h4>
        //                     </label>
        //                     {/* <input type="text" name='name' placeholder="name" className="input input-bordered" /> */}
        //                     <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
        //                 </div>
        //                 <div className=" mt-4">
        //                     <input className="bg-success px-8 py-2 rounded" type="submit" value="Submit" />
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        //     <div>
        //         <div className='job-cart py-4 px-6'>
        //             <h6 className='text-2xl font-bold text-center mb-4'>College Image</h6>
        //             <img className="w-full" src={imgURL} alt={collegeName} />
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="card card-compact w-80 bg-base-400 shadow-xl class-img">
                <figure><img src={imgURL} alt={collegeName} /></figure>
                <div className="px-6 py-4">
                    <p className='py-1 job-description'><span className='font-bold text-slate-700'>College Name</span>: {collegeName}</p>
                    <p className='mb-1 job-description'><span className='font-bold text-slate-700'>Candidate Name</span>: {candidateName}</p>
                    <p className='mb-1 job-description'><span className='font-bold text-slate-700'>Candidate Email</span>: {candidateEmail}</p>
                    <p className='mb-1 job-description'><span className='font-bold text-slate-700'>Candidate Phone</span>: {candidatePhone}</p>
                    <p className='mb-1 job-description'><span className='font-bold text-slate-700'>Subject</span>: {subject}</p>
                    <p className='mb-1 job-description'><span className='font-bold text-slate-700'>Date Of Birth</span>: {dateOfBirth}</p>
                    <p className='mb-1 job-description'><span className='font-bold text-slate-700'>Address</span>: {address}</p>
                    <div>
                        <form onSubmit={handleReview}>
                            <div className="form-control">
                                <label className="label">
                                    <h4 className="font-bold text-2xl">Review</h4>
                                </label>
                                {/* <input type="text" name='name' placeholder="name" className="input input-bordered" /> */}
                                <textarea placeholder="Bio" name="textarea" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                            </div>
                            <div className=" mt-4 flex">
                                <input className="bg-success px-8 ml-1 py-2 rounded" type="submit" value="submit" />
                            </div>
                        </form>
                        {/* <Link to={`/details/${''}`}><button className='btn btn-success text-slate-100 mt-2'>Details</button></Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollegeReview;