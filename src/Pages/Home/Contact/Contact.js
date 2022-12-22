import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import locationImage from '../../../assets/assets/images/home/locationCake.jpg'

const Contact = () => {
    return (
        <div className=''>
            <div className="contact mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div className='px-10 lg:px-20 border-r-0 lg:border-r border-pink-400 py-20'>
                    <h1 className='font-bold text-red-600 tracking-wider'>CONTACT US</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-5xl lg:text-6xl mt-5 mb-0 lg:mb-5'>We make your</h1>
                    <h1 style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-5xl lg:text-6xl mt-0 lg:mt-5 mb-16'>event unforgetable</h1>
                    <div className='flex items-center gap-4' >
                        <div className='text-base mt-1 text-red-400'><FaEnvelope></FaEnvelope></div>
                        <div className='text-base'>contact@gmail.com</div>
                    </div>
                    <div className='flex items-center gap-4' >
                        <div className='text-base mt-3 text-red-400'><FaRegClock></FaRegClock></div>
                        <div className='text-base mt-3'>Monday to Friday 9am to 5pm</div>
                    </div>
                    <div className='flex items-center gap-4' >
                        <div className='text-base mt-3 text-red-400'><FaPhone></FaPhone></div>
                        <div className='text-base mt-3'>+880 1234 678910</div>
                    </div>
                    <div className='flex items-center gap-4' >
                        <div className='text-base mt-3 text-red-400'><FaMapMarkerAlt></FaMapMarkerAlt></div>
                        <div className='text-base mt-3'>Chattogram, Bangladesh</div>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div>
                        <img className='w-4/5 px-6 py-20' src={locationImage} alt="" />
                    </div>
                    <div style={{zIndex: '999!important'}}>
                        <div style={{ width: '560px', height: '560px' }} className='bg-white -mt-40 -ml-40 border border-pink-400 p-7 mb-20'>
                            <div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Chittagong&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;