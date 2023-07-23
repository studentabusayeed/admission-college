import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import './Navbar.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.log(error));
    }


    const Menu = <>
        <li className='text-white'><Link className='font-semibold bg-slate-500 py-3 px-3 hover:text-white mr-2' to="/">Home</Link></li>
        <li className='text-white'><Link className='font-semibold bg-slate-500 py-3 px-3 hover:text-white mr-2' to="/colleges">Colleges</Link></li>
        <li className='text-white'><Link className='font-semibold bg-slate-500 py-3 px-3 hover:text-white mr-2' to="/admission">Admission</Link></li>
        <li className='text-white'><Link className='font-semibold bg-slate-500 py-3 px-3 hover:text-white mr-2' to="/myCollege">My College</Link></li>

        {user?.email ? <>
            <img className={user.photoURL ? 'img-menu' : ''} title={user?.displayName} src={user?.photoURL
            } alt="" />
            <Link onClick={handleLogout} className='font-bold bg-yellow-700 px-5 rounded-lg flex items-center text-white mx-2 log-btn'>Log out</Link>
        </> : <>
            <Link className='font-bold bg-yellow-700 px-5 rounded-lg flex items-center text-white mx-2 log-btn' to="/login">Login</Link>
            <Link className='font-bold bg-yellow-700 px-5 rounded-lg flex items-center text-white reg-btn mx-2' to="/signup">Sign Up</Link>
        </>}
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-success h-20 pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Menu}
                    </ul>
                </div>
                <div className='flex items-center'>
                    {/* <Link to="/" className="nav-logo"> <img src={logo} alt="" /> </Link> */}
                    <h4 className='font-semibold text-1xl mb-2 ml-6 uppercase text-white'>College Admission</h4>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;