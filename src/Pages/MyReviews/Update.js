import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const storedReview = useLoaderData();
    const { user } = useContext(AuthContext)

    const [review, setReview] = useState(storedReview);

    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(review);
        fetch(`http://localhost:5000/myReviews/${storedReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated !', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);

    }

    return (
        <div>
            {
                user?.uid &&
                <div className='w-2/4 mx-auto my-20 p-16 bg-gray-200'>
                    <h2 className='text-2xl text-center mb-5'>Please Update: {storedReview.serviceName}</h2>
                    <form onSubmit={handleUpdateReview}>
                        <input className='w-full py-10 px-5 mb-5' onChange={handleInputChange} defaultValue={storedReview.comment} type="text" name='comment' placeholder='review' required />
                        <br />
                        <button className='btn bg-pink-500 border-0' type="submit">Update Review</button>
                    </form>
                </div>
            }
            <ToastContainer />

        </div>
    );
};

export default Update;