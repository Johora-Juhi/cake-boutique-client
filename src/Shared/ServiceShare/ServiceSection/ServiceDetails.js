import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div className='container mx-auto'>
            <div className=''>
                <div className="pt-20">
                    <h4 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className="text-6xl mt-5 text-center mb-8">{service.name}</h4>
                    <img className="mx-auto w-full lg:w-2/4 border border-red-400 p-6" src={service.img} alt="" />
                    <div style={{ marginTop: '-8px' }} className='text-center'>
                        <h4 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className="-mt-40 text-4xl text-center bg-white border border-red-400 inline-block px-10 py-4 rounded-lg"><span>Price: ${service.price}</span></h4>
                    </div>
                    <div className='w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20'>
                        <div className='border-l border-red-400 pl-6'>
                            <p className="text-4xl">About {service.name}</p>
                            <div style={{ width: '200px', height: '1.5px', backgroundColor: 'pink' }} className="my-4"></div>
                            <p className="w-full mx-auto text-gray-500 leading-7 text-justify tracking-wider">{service.description}</p>
                        </div>
                        <div className='border-l border-red-400 pl-6'>
                            <p className="text-4xl">Additional Information</p>
                            <div style={{ width: '200px', height: '1.5px', backgroundColor: 'pink' }} className="my-4"></div>
                            <p className="mt-5 text-gray-500 font-normal tracking-wider text-base leading-9">Cake Theme: {service.design}</p>
                            <p className="text-gray-500 font-normal tracking-wider text-base leading-9">Flavours: {service.flavours}</p>
                            <p className="text-gray-500 font-normal tracking-wider text-base leading-9">Order Limit: {service.weight}</p>
                            <p className="text-gray-500 font-normal tracking-wider text-base leading-9">Rating: {service.rating}</p>
                        </div>
                    </div>
                </div>
                <div className='-mt-20 pb-10'>
                    {/* <h1 className='text-2xl text-gray-600 font-semibold'>Reviews</h1> */}
                    <ReviewSection service={service}></ReviewSection>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;