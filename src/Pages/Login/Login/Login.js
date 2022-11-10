import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { signIn, googleLogin} = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const nevigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        setError('');

        signIn(email, password)
            .then(result => {
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
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                nevigate(from, { replace: true });
            })
            .catch(error => console.error('error', error))
    }
    return (
        <div className="hero min-h-screen bg-pink-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <h1 className='text-3xl font-semibold'>Sign In</h1>
                            <p>New in Cake Boutique? <Link style={{color: 'blue'}} to='/register'>Register</Link> </p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  style={{backgroundColor: '#f472b6' , border: 'none'}} className="btn btn-primary">Login</button>
                        </div>
                        <p>{error}</p>
                    </form>
                    <button onClick={handleGoogleSignIn}  style={{backgroundColor: '#f472b6' , border: 'none'}} className="btn btn-primary px-10 mx-8 mb-10">Google Sign Up</button>

                </div>
            </div>
        </div>
    );
};

export default Login;