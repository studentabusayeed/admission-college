import React from 'react';

const Galleryimg = ({user}) => {
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className='rounded' src={user.img} alt="Shoes" /></figure>
        </div>
    );
};

export default Galleryimg;