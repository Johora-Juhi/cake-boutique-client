import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, name, description } = service;
    return (
        <div style={{backgroundColor: '#fff8ff'}} className="card card-compact w-full rounded-none border border-red-300 p-1">
            <PhotoProvider>
                <PhotoView className="relative" src={img}>
                    <img style={{ height: '330px' }} className='' src={img} alt="" />
                </PhotoView>
                <h1 className='absolute right-3 border shadow-lg text-white text-xl border-red-700 bg-red-400 px-3 py-2 rounded-xl top-3'>Price: ${price}</h1>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="bg-white text-4xl -mt-12 rounded-md text-red-400 text-center border border-pink-400 py-4">{name}</h2>
                {/* <p className='text-2xl text-gray-500  text-center'>Price: <span className='font-semibold text-pink-400'>${price}</span> </p> */}
                <p className='text-base tracking-wide pt-3 pb-4'> {
                    description.length > 80 ?
                        <p className=' text-gray-600 leading-6'>{description.slice(0, 80) + '..'} <Link className='text-blue-600' to={`/services/${_id}`}>More</Link></p>
                        :
                        <p>{description}</p>
                }</p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}><button className="btn btn-bg btn-outline uppercase border-pink-500 text-pink-500 rounded-none border-dashed">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;