import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, name, description } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img style={{height: '330px'}} className='rounded-t-2xl' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="text-4xl text-pink-300 text-center border-b-2 border-pink-100 pb-5">{name}</h2>
                <p className='text-2xl text-gray-500  text-center'>Price: <span className='font-semibold text-pink-400'>${price}</span> </p>
                <p className='text-center'> {
                    description.length > 100 ?
                        <p className=' text-gray-600 leading-6'>{description.slice(0, 100) + '..'} <Link className='text-blue-600' to={`/services/${_id}`}>More</Link></p>
                        :
                        <p>{description}</p>
                }</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}><button className="btn btn-bg btn-outline uppercase border-pink-500 text-pink-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;