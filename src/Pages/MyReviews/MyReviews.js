import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://assignment-eleven-server-hazel.vercel.app/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://assignment-eleven-server-hazel.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.error('Review Deleted !', {
                            position: toast.POSITION.TOP_CENTER
                        });
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            {
                reviews?.length > 0 ?
                    <div className=' container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center my-20'>
                        {reviews.map(review =>
                            <MyReviewsCard
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></MyReviewsCard>
                        )}
                    </div>
                    :
                    <div className='w-full border-y-2 border-pink-500 bg-pink-50  text-center py-20 px-10 mx-auto my-20'>
                        <h1 className='text-5xl font-semibold  text-pink-700'>No reviews were added</h1>
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default MyReviews;