import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const design = form.design.value;
        const img = form.image.value;

        const service = {
            name,
            price,
            rating,
            description,
            design,
            img,
        }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added !', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-10 font-semibold text-gray-100'><span style={{ color: 'red' }}>Add</span> Services</h2>
                {/* <img className='m-auto' src={bar} alt="" /> */}
            </div>
            <div className="w-2/4 mx-auto pb-20 pt-10">
                <form onSubmit={handleAddService}>
                    <label className='mt-3' htmlFor="">Name</label> <br />
                    <input name='name' type="text" placeholder="Add Service Name" className="input input-bordered w-full mb-3" required /><br />
                    <label className='mt-4' htmlFor="">Price</label><br />
                    <input name='price' type="text" placeholder="Add Price" className="input input-bordered w-full mb-3" required /><br />
                    <label className='mt-4' htmlFor="">Rating</label><br />
                    <input name='rating' type="text" placeholder="Enter Service Rating" className="input input-bordered w-full mb-3" required /><br />
                    <label className='mt-4' htmlFor="">Design</label><br />
                    <input name='design' type="text" placeholder="Enter Design Abailability" className="input input-bordered w-full mb-3" required /><br />
                    <label className='mt-4' htmlFor="">Image</label><br />
                    <input name='image' type="text" placeholder="Enter Image URL" className="input input-bordered w-full mb-3" required /><br />
                    <label className='mt-4' htmlFor="">Description</label><br />
                    <input name='description' type="text" placeholder="Enter Service Description" className="input input-bordered w-full " required /><br />
                    <div className="card-actions">
                        <button style={{ border: '1px solid #ff6868', backgroundColor: '#000', textTransform: 'uppercase', boxShadow: '0px 0px 5px 0px inset #ff6868' }} className="btn btn-block mt-5">ADD SERVICE</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddService;