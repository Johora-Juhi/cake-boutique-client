import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/home/logo.png';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 text-base-content justify-evenly items-center border-y-2 border-pink-500 bg-pink-50">
                <div className='justify-items-center'>
                    <span className="footer-title text-pink-700">Contact INFO</span>
                    <p>Email Us: contact@gmail.com</p>
                    <p>Call Us: 123 123 345</p>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='justify-items-center'>
                    <span className="footer-title text-pink-700">Visit US</span>
                    <p>Monday to Friday 7am to 5pm</p>
                    <p>Coppice Celyn 123, MA US</p>
                </div>
            </footer>
            <footer className="footer footer-center p-10 text-base-content rounded border-b-2 border-pink-500 bg-pink-50">
                <div className="grid grid-flow-col gap-4 text-base font-semibold">
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </footer>
        </>

    );
};

export default Footer;