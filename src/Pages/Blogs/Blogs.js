import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            <div>
                <div className="container mx-auto px-10 py-10 text-center">
                    <h1 className='text-center text-7xl text-pink-500'>Blogs</h1>
                    <div className='text-left py-10'>
                        <div className='text-4xl bg-pink-100 pl-3 py-2 border-l-4 border-pink-500' >Question:<span className='text-gray-700'> Difference between SQL and NoSQL</span> </div>
                        <div>
                            <h1 className='text-3xl font-semibold mt-5'>SQL</h1>
                            <p className='text-xl mt-2 text-gray-500'>1. RELATIONAL DATABASE MANAGEMENT SYSTEM.</p>
                            <p className='text-xl mt-2 text-gray-500'>2. These databases have fixed or static or predefined schema.</p>
                            <p className='text-xl mt-2 text-gray-500'>3. These databases are not suited for hierarchical data storage.</p>
                            <p className='text-xl mt-2 text-gray-500'>4. These databases are best suited for complex queries.</p>
                            <p className='text-xl mt-2 text-gray-500'>5. Vertically Scalable.</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold mt-5'>NoSQL</h1>
                            <p className='text-xl mt-2 text-gray-500'>1. Non-relational or distributed database system.</p>
                            <p className='text-xl mt-2 text-gray-500'>2. They have dynamic schema.</p>
                            <p className='text-xl mt-2 text-gray-500'>3. These databases are best suited for hierarchical data storage.</p>
                            <p className='text-xl mt-2 text-gray-500'>4. These databases are not so good for complex queries</p>
                            <p className='text-xl mt-2 text-gray-500'>5. Horizontally scalable.</p>
                        </div>
                        <div className=' mt-20 text-4xl bg-pink-100 pl-3 py-2 border-l-4 border-pink-500' >Question:<span className='text-gray-700'> What is JWT, and how does it work?</span> </div>
                        <div>
                            <p className='text-xl mt-4 text-gray-500 leading-8'>JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. Basically the identity provider, generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook.
                                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                                Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                        </div>
                        <div className=' mt-20 text-4xl bg-pink-100 pl-3 py-2 border-l-4 border-pink-500' >Question:<span className='text-gray-700'> What is the difference between javascript and NODE Js?</span> </div>
                        <div>
                            <h1 className='text-3xl font-semibold mt-5'>Java Script</h1>
                            <p className='text-xl mt-2 text-gray-500'>1. Javascript is a programming language that is used for writing scripts on the website. </p>
                            <p className='text-xl mt-2 text-gray-500'>2. It is basically used on the client-side.</p>
                            <p className='text-xl mt-2 text-gray-500'>3. Javascript can only be run in the browsers.</p>
                            <p className='text-xl mt-2 text-gray-500'>4. Javascript is capable enough to add HTML and play with the DOM.</p>
                            <p className='text-xl mt-2 text-gray-500'>5. Some of the javascript frameworks are RamdaJS, TypedJS, etc.</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold mt-5'>Node JS</h1>
                            <p className='text-xl mt-2 text-gray-500'>1. NodeJS is a Javascript runtime environment.</p>
                            <p className='text-xl mt-2 text-gray-500'>2. It is mostly used on the server-side.</p>
                            <p className='text-xl mt-2 text-gray-500'>3. We can run Javascript outside the browser with the help of NodeJS.</p>
                            <p className='text-xl mt-2 text-gray-500'>4. Nodejs does not have capability to add HTML tags.</p>
                            <p className='text-xl mt-2 text-gray-500'>5. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</p>
                        </div>
                        <div className=' mt-20 text-4xl bg-pink-100 pl-3 py-2 border-l-4 border-pink-500' >Question:<span className='text-gray-700'> How does NodeJS handle multiple request at the same time?</span> </div>
                        <div>
                            <p className='text-xl mt-4 text-gray-500 leading-8'>NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;