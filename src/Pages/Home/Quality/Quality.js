import React from 'react';
import './Quality.css';

const Quality = () => {
    return (
        <div className='qBackground'>
            <div className="container mx-auto py-28">
                <div className="qualitySection grid grid-cols-2 gap-20 items-center">
                    <div>
                        <h1 className='text-5xl mb-6 font-semibold text-white'>Quality Ingredients</h1>
                        <p className='text-2xl font-medium text-gray-200'>Quality ingredients can have a true impact on the taste of food that is served at a restaurant. These ingredients are enhanced based on their freshness and the natural nature that the best ones bring to the table.</p>
                        <p className='text-lg mt-5 font-medium leading-8 text-gray-300'>The use of unique and high-quality ingredients can help to bring out the dish's full potential. Take the most basic of ingredients such as poultry, for instance. When it comes to something so simple, the distinguishing elements lie in the quality.</p>
                    </div>
                    <div>
                        <h1 className='text-4xl mb-6 font-semibold text-white'>Catering Service</h1>
                        <p className='text-lg mt-5 font-normal leading-8 text-gray-300'>Caterers take care of customized menus, beverages, table arrangements like silverware and plates, the general decor of the venue, service and much more. Since catering is not just preparing and serving the specified menu, leaving the job to the professionals have become inevitable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;