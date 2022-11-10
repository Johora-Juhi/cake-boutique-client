import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ review, handleDelete}) => {
    return (
        <div className='container mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl border-white border-2 mb-10">
                <figure><img src={review.serviceImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{review.serviceName}</h2>
                    <p>Customer's Feedback: {review.comment}</p>
                    <div className="card-actions justify-start">
                       <Link to={`/update/${review._id}`}> <button className="btn btn-primary uppercase">Edit</button></Link>
                        <button onClick={() => handleDelete(review._id)} className="btn btn-primary uppercase">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;
