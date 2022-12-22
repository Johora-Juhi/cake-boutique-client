import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle('Register');
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState(''); const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const nevigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL, email, password);
        setError('');

        createUser(email, password)
            .then(result => {
                handleUpdateUser(name,photoURL);
                const user = result.user;
                console.log(user);
                form.reset();
                nevigate(from, { replace: true });

            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile);

    }
    return (
        <div className="w-full md:w-2/4 lg:w-1/4 mx-auto mb-20 px-10 lg:px-0 ">
                <div className="card flex-shrink-0 w-full rounded-lg bg-base-100  border border-red-400 login">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div  className="form-control">
                            <h1 className='text-3xl pb-2 font-semibold'>Sign Up</h1>
                            <p className='text-stone-400 text-xs'>Already Registered? <Link style={{ color: 'blue' }} to='/login'>Login</Link> </p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name='photo' type="text" placeholder="Image URL" className="input input-bordered" />
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
                            <button className="btn bg-pink-600 border-none uppercase tracking-widest rounded-none text-white">Register</button>
                        </div>
                        <p>{error}</p>
                    </form>
                </div>
            </div>
    );
};

export default Register;