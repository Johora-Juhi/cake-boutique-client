import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ReviewSection = ({ service }) => {
    const { _id, name, img } = service;
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://assignment-eleven-server-hazel.vercel.app/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id]);

    const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const email = user?.email || 'unregistered';


        const review = {
            email,
            serviceId: _id,
            serviceName: name,
            serviceImage: img,
            name: user.displayName,
            comment,
            image: user.photoURL
        }


        fetch('https://assignment-eleven-server-hazel.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Comment added')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div>
            <div className='container mx-auto my-20'>
                {
                    user?.uid ?
                        <div style={{ backgroundColor: '#FFF8FF' }} className='w-3/4 mx-auto p-10 rounded-xl border border-red-200 mb-20'>
                            <h1 className='text-2xl text-gray-700 mb-5'>Add Your Review</h1>
                            <form onSubmit={handleAddComment}><textarea className='bg-gray-50 border border-gray-200 rounded-xl p-3 w-full' name="comment" id="" cols="50" rows="5" placeholder='Enter Your Review Here'></textarea> <br />
                                <button className="btn btn-outline btn-error uppercase tracking-wide rounded-md mt-3">Add Review</button>
                            </form>
                        </div>
                        :
                       <div className='w-3/4 mx-auto text-center'><button className="btn btn-outline btn-error uppercase tracking-wide"><Link to='/login'>Please login to add a review</Link></button></div> 
                }
                {
                    reviews.length?
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='w-3/4 mx-auto text-5xl text-gray-600 font-semibold'>Reviews</h1>
                    :
                    <h1> </h1>
                }
            </div>
            {
                reviews.map(review =>
                    <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>
                )
            }
        </div>

    );
};

export default ReviewSection;