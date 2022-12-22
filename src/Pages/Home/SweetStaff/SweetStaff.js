import React from 'react';
import { Link } from 'react-router-dom';
import staff from '../../../assets/assets/images/home/staff.jpg';

const SweetStaff = () => {
    return (
        <div className='py-28 border-b border-pink-300'>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0 items-center">
                <div className='px-10 lg:px-20'>
                    <h1 className='font-bold text-red-600 tracking-wider'>THEY ARE THE BEST</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-6xl mt-5 mb-10'>Our sweet staff</h1>
                    <p className='text-xl text-gray-500'>Companies also use the term "staff" to identify people who work for the company directly as opposed to those who work for staffing agencies or as independent contractors.</p>
                    <Link><button style={{backgroundColor: '#DB2777'}} className='btn btn-error rounded-none mt-6 tracking-wide text-lg text-white'>Services</button></Link>
                </div>
                <div className='px-10 lg:px-0'>
                    <div style={{ height: '365px' }} className='w-full md:w-2/4 mx-auto  border border-pink-400 bg-white'>
                        <div><img className='p-4 lg:p-9 border-b border-pink-400' src={staff} alt="" /></div>
                        <div style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-center py-6 text-4xl'>Staff</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SweetStaff;