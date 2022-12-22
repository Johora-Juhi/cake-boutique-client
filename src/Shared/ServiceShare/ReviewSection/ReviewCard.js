import React from 'react';

const ReviewCard = ({ review }) => {
    console.log(review);

    return (
        <div className='container mx-auto w-3/4'>
            <div className='flex gap-5  justify-start items-center my-10'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={review.image} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-gray-600'>{review.name}</h1>
                    <h1 className='text-sm text-gray-600'>Feedback: {review.comment}</h1>
                </div>

            </div>
            <hr />

        </div>
    );
};

export default ReviewCard;