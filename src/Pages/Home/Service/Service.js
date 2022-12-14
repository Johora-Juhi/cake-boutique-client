import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../Shared/ServiceShare/ServiceSection/ServiceCard';


const Service = () => {
    const [services, setServices] = useState([]);
    const size = 3;

    useEffect(() => {
        const url = `https://assignment-eleven-server-hazel.vercel.app/services?&size=${size}`;
        console.log(size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [size])

    return (
        <div className='border-b border-red-400'>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2  style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-7xl mb-3 font-semibold text-red-400'>Services</h2>
                {/* <img className='m-auto' src={bar} alt="" /> */}
            </div>
            <div className='container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-16'>
                <button className="btn bg-pink-600 border-none mb-20 uppercase tracking-widest rounded-none text-white"><Link to='/services'>View All SERVICES</Link></button>
            </div>
        </div >
    );
};

export default Service;