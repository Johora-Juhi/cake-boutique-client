import React from 'react';
import './Moments.css';
import img1 from '../../../assets/assets/images/home/sweet.jpg'

const Moments = () => {
    return (
        <div className='memories'>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center text-center">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='p-10'>
                    <h3 className='text-white font-semibold text-5xl mb-6'>ACRYLIC</h3>
                    <p className='text-gray-500 font-normal tracking-wider leading-8'>Cake is essential when it comes to celebrations. It adds more happiness to the occasion, symbolises success and milestones, and makes a perfect gift to warm the heart of the celebrant. Nothing can beat the power of cakes to light up the party and make things extra special. Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.</p>
                </div>
            </div>
        </div>
    );
};

export default Moments;