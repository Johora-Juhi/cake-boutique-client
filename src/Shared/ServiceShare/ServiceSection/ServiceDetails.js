import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2'>
                <div className="py-20">
                <img className="mx-auto" src={service.img} alt="" />
                    <h4 className="text-6xl mb-3 mt-5">{service.name}</h4>
                    <p className="text-4xl mt-10 mb-3">Description</p>
                    <p className="w-full mx-auto p5-10 text-gray-500 font-thin leading-7 text-justify tracking-wider mb-10">{service.description}</p>
                    <h4 className="text-4xl my-3 text-red-300"><span>Price: ${service.price}</span></h4>
                    <p className="text-gray-500 font-normal tracking-wider text-xl leading-9">Cake Theme: {service.design}</p>
                    <p className="text-gray-500 font-normal tracking-wider text-xl leading-9">Flavours: {service.flavours}</p>
                    <p className="text-gray-500 font-normal tracking-wider text-xl leading-9">Order Limit: {service.weight}</p>
                    <p className="text-gray-500 font-normal tracking-wider text-xl leading-9">Rating: {service.rating}</p>
                </div>
            </div>

            <div>
            </div>
        </div>
    );
};

export default ServiceDetails;