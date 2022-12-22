import React from 'react';
import i1 from '../../../assets/assets/images/home/cd1.jpg'
import i2 from '../../../assets/assets/images/home/cd2.jpg'
import i3 from '../../../assets/assets/images/home/cd3.jpg'
import i4 from '../../../assets/assets/images/home/cd4.jpg'
// import './Gallery.css'

const Gallery = () => {
    return (
        <div style={{ backgroundColor: '#fff8ff' }} className='border-b border-red-400'>
            <div style={{ backgroundColor: '#fff8ff' }} className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-20 px-10 lg:px-0">
                    <div style={{height: '495px'}} className='cakeCard w-full md:w-3/4 mx-auto border border-pink-400 bg-white'>
                        <div><img className='p-9 border-b border-pink-400' src={i1} alt="" /></div>
                        <div style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-center py-6 text-4xl'>Birthday Cakes</div>
                    </div>
                    <div style={{height: '495px'}}  className='cakeCard w-full md:w-3/4 mx-auto border border-pink-400 bg-white mt-12 lg:mt-32'>
                        <div><img className='p-9 border-b border-pink-400' src={i2} alt="" /></div>
                        <div style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-center py-6 text-4xl'>Wedding Cakes</div>
                    </div>
                    <div style={{height: '495px'}} className='cakeCard w-full md:w-3/4 mx-auto border border-pink-400 bg-white mt-12 lg:mt-0'>
                        <div><img className='p-9 border-b border-pink-400' src={i3} alt="" /></div>
                        <div style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-center py-6 text-4xl'>Seasonal Cakes</div>
                    </div>
                    <div style={{height: '495px'}}  className='cakeCard w-full md:w-3/4 mx-auto border border-pink-400 bg-white mt-12 lg:mt-32'>
                        <div><img className='p-9 border-b border-pink-400' src={i4} alt="" /></div>
                        <div style={{ fontFamily: 'Dancing Script', fontWeight: '600' }} className='text-center py-6 text-4xl'>Other Sweet Stuff</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;