import React from 'react';
import Banner from '../Banner/Banner';
import Moments from '../Moments/Moments';
import Quality from '../Quality/Quality';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service> </Service>
            <Moments></Moments>
            <Quality></Quality>
        </div>
    );
};

export default Home;