import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

import ServiceCard from '../../Shared/ServiceShare/ServiceSection/ServiceCard';

const Services = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);

    const size=services.length;
    
    useEffect(() => {
        const url = `http://localhost:5000/services?&size=${size}`;
        console.log(size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [size])
    return (
        <div>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-3 font-semibold text-pink-400'>Services</h2>
            </div>
            <div className='container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;