import React from 'react';
import './Home.css'
import Banner from './Banner';
import Info from './Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
        </div>
    );
};

export default Home;