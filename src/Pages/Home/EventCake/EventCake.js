import React from 'react';
import eCake from '../../../assets/assets/images/home/EventCake.jpg';

const EventCake = () => {
    return (
        <div style={{ backgroundColor: '#fff8ff' }}  className='border-y border-red-400 py-20'>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                <div>
                    <img src={eCake} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-red-600 tracking-wider text-center pt-10 lg:pt-0'>YOU NEED THIS</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-6xl mt-5 text-center'>Event without cake?</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-6xl mt-5 text-center'>Really?</h1>
                    <p className='px-10 text-justify lg:text-center mt-9 text-xl text-gray-600 tracking-wider'>An event is a planned and organized occasion, for example a social gathering or a sports match. The cross-country section of the three-day event was held here yesterday major sporting events.</p>
                </div>
            </div>
        </div>
    );
};

export default EventCake;