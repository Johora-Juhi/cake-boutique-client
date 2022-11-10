import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    // alert('deleted successfully');
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
        <div className=' container mx-auto grid grid-cols-2 gap-10 justify-center'>
            {
                reviews?._id ?
               <> {reviews.map(review =>
                <MyReviewsCard
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></MyReviewsCard>
            )}
            </>
            :
            <h1>No reviews were added</h1>
            }
            <ToastContainer />
        </div>
    );
};

export default MyReviews;