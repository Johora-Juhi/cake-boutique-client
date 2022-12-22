import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/assets/images/home/logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error('error', error))
    }
    return (
        <div style={{ backgroundColor: '#fff' }} className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start ">
                <div className="dropdown border-red-300 border border-dashed">
                    <label tabIndex={0} className="btn btn-ghost hover:bg-red-100 hover:text-red-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link> </li>
                        <li><Link to='/services'>Services</Link> </li>
                        <li><Link to='/blogs'>Blogs</Link> </li>
                        {
                            user?.uid &&
                                <>
                                    <li><Link to='/myReviews'>My Reviews</Link></li>
                                    <li><Link to='/addServices'>Add Service</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
            <div className="-ml-4 navbar-center w-1/4 md:w-1/2 mx-auto justify-center">
                <img className='' src={logo} alt="" />
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <div className='flex items-center'>
                                <div>
                                    {
                                        user?.photoURL ?
                                            <div title={user.displayName} className="avatar ">
                                                <div className="w-8 rounded-full">
                                                    <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            :
                                            <FaUserAlt title={user.displayName} />
                                    }
                                </div>

                            <button className='btn btn-error border-none ml-5 text-white ' onClick={handleLogOut} variant="primary">Log out</button>
                        </div>
                        :
                        <>
                            <button className="btn btn-outline btn-secondary rounded-none border-red-400 text-red-400 border-dotted"><Link to="/login">Login</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;