import React, { useContext, useState } from 'react';
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
        const number = form.number.value;

        const reviewInfo = {
            textarea,
            number,
            candidateName
        }
        console.log(reviewInfo);
        fetch('https://admission-college-server-studentabusayeed.vercel.app/review', {
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
                                <textarea placeholder="Bio" name="textarea" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <h4 className="text-1xl font-semibold">Rating</h4>
                                </label>
                                <input type="number" placeholder='rating' name='number' className="px-8 ml-1 py-2 rounded" />
                            </div>
                            <div className=" mt-4 flex">
                                <input className="bg-success px-8 ml-1 py-2 rounded" type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollegeReview;