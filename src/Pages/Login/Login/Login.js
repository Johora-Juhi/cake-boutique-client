import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import './Login.css'

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
            <div className="w-full md:w-2/4 lg:w-1/4 mx-auto mb-20 px-10 lg:px-0 ">
                <div className="card flex-shrink-0 w-full rounded-lg bg-base-100  border border-red-400 login">
                    <form  onSubmit={handleSubmit} className="card-body pb-0">
                        <div className="form-control">
                            <h1 className='text-3xl pb-2 font-semibold'>Login</h1>
                            <p className='text-stone-400 text-xs'>New in Cake Boutique? <Link style={{color: 'blue'}} to='/register'>Register</Link> </p>
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
                            <button className="btn bg-pink-600 border-none uppercase tracking-widest rounded-none text-white">Login</button>
                        </div>
                        <p>{error}</p>
                        <div className="divider -mt-1">OR</div>
                    </form>
                    
                    <button onClick={handleGoogleSignIn} className="btn btn-bg btn-outline uppercase border-pink-500 text-pink-500 rounded-none px-10 mx-8 mb-10">Google Sign Up</button>
                </div>
            </div>
    );
};

export default Login;