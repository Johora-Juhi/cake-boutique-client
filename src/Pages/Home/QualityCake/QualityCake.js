import React from 'react';
import './QualityCake.css';
import qualityCake from '../../../assets/assets/images/home/qualityCake.jpg';
import { FaCircle } from "react-icons/fa";

const QualityCake = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center items-center border-b border-red-300'>
                <div className="qualityCakeImage w-full lg:w-2/4 border-r-0 lg:border-r border-red-300 py-20">
                    <img className='m-auto w-3/4' src={qualityCake} alt="" />
                </div>
                <div className="qualityCakeDetails w-full lg:w-2/4 pt-0 pb-20 lg:py-20 px-10 lg:px-20">
                    <h1 className='font-bold text-red-600 tracking-wider'>BAKED FROM SCRATCH</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-6xl mt-5'>We make</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-6xl mb-10'>quality cakes</h1>
                    <p className='text-gray-600 tracking-wide text-lg leading-8 mb-10'>
                        A cake is essential when it comes to celebrations. It adds more happiness to the occasion, symbolises success and milestones, and makes a perfect gift to warm the heart of the celebrant.
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-20'>
                        <div>
                            <div className='flex items-center gap-5 mb-3'>
                                <div><FaCircle className="text-red-500" style={{ width: '11px' }}></FaCircle></div>
                                <div className='text-lg font-semibold text-red-900'>Wedding Cakes</div>
                            </div>
                            <div className='flex items-center gap-5 mb-3'>
                                <div><FaCircle className="text-red-500" style={{ width: '11px' }}></FaCircle></div>
                                <div className='text-lg font-semibold text-red-900'>Birthday Cakes</div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div><FaCircle className="text-red-500" style={{ width: '11px' }}></FaCircle></div>
                                <div className='text-lg font-semibold text-red-900'>Cakepops</div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-5 mb-3'>
                                <div><FaCircle className="text-red-500" style={{ width: '11px' }}></FaCircle></div>
                                <div className='text-lg font-semibold text-red-900'>Seasonal pies</div>
                            </div>
                            <div className='flex items-center gap-5 mb-3'>
                                <div><FaCircle className="text-red-500" style={{ width: '11px' }}></FaCircle></div>
                                <div className='text-lg font-semibold text-red-900'>Pastries</div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div><FaCircle className="text-red-500" style={{ width: '11px' }}></FaCircle></div>
                                <div className='text-lg font-semibold text-red-900'>All sweet stuff</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityCake;