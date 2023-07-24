import React, { useState } from 'react';
// import img1 from "../../../assets/gallery/img8.jpg";
// import img2 from "../../../assets/gallery/gallery2.jpeg";
// import img3 from "../../../assets/gallery/gallery3.jpeg";
// import img4 from "../../../assets/gallery/gallery4.jpeg";
// import img5 from "../../../assets/gallery/gallery5.jpeg";
// import img6 from "../../../assets/gallery/gallery6.jpeg";
import Galleryimg from './GalleryImg';

const Gallery = () => {
    const [users, setUsers] = useState([]);
    fetch('img.json')
    .then(res => res.json())
    .then(data => setUsers(data));
    return (
        <div className='bg-slate-100 py-6'>
            <h2 className='text-2xl font-bold text-center text-cyan-600'>College Graduate's Group Pictures</h2>
            <div className='flex justify-center'>
                <div className="divider w-1/2"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center bg-slate-100 p-20 rounded'>
                {
                    users.map((user) => <Galleryimg
                        key={user.id}
                        user={user}
                    ></Galleryimg>)
                }
            </div>
        </div>
    );
};

export default Gallery;