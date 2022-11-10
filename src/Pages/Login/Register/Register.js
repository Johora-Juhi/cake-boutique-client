import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-pink-50">
            <div style={{width: '400px'}} className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className='text-3xl font-semibold'>Sign Up</h1>
                            <p>Already Registered? <Link style={{ color: 'blue' }} to='/login'>Login</Link> </p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name='image' type="text" placeholder="Image URL" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Password" className="input input-bordered" />   
                        </div>
                        <div className="form-control mt-6">
                            <button style={{backgroundColor: '#f472b6' , border: 'none'}} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;