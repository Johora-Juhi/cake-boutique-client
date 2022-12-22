import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row border-y border-red-300 '>
            <div className='w-full lg:w-3/4 bbNrP'>
                <div className='bbNr'></div>
            </div>
            <div className='w-full lg:w-1/4 text-4xl fBanner'>
                <div className='border-b border-red-300 h-full lg:h-2/4 justify-center flex items-center py-10 lg:py-0'>
                    <p>Our cakes</p>
                </div>
                <div className='h-full lg:h-2/4 justify-center flex items-center py-10 lg:py-0'>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
