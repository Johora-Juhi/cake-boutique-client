import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Moments from '../Moments/Moments';
import Quality from '../Quality/Quality';
import Service from '../Service/Service';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Moments></Moments>
            <Quality></Quality>
        </div>
    );
};

export default Home;