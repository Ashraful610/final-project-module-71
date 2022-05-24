import React from 'react';
import './Home.css'
import Banner from './Banner';
import Info from './Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;