import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import EventCake from '../EventCake/EventCake';
import Gallery from '../Gallery/Gallery';
// import Moments from '../Moments/Moments';
// import Quality from '../Quality/Quality';
import QualityCake from '../QualityCake/QualityCake';
import Service from '../Service/Service';
import SweetStaff from '../SweetStaff/SweetStaff';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <QualityCake></QualityCake>
            <Service></Service>
            <Gallery></Gallery>
            <SweetStaff></SweetStaff>
            <EventCake></EventCake>
            {/* <Moments></Moments> */}
            {/* <Quality></Quality> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;