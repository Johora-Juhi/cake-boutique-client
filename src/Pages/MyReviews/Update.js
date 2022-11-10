import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const storedReview = useLoaderData();
    const {user}=useContext(AuthContext)

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
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);

    }

    return (
        <div>
           {
            user?.uid && 
            <>
             <h2>Please Update: {storedReview.serviceName}</h2>
            <form onSubmit={handleUpdateReview}>
                <input onChange={handleInputChange} defaultValue={storedReview.comment} type="text" name='comment' placeholder='review' required />
                <br />
                <button type="submit">Update Review</button>
            </form></>
           }
                       <ToastContainer />

        </div>
    );
};

export default Update;