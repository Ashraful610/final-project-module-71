import React from 'react';
import './Home.css'
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Info></Info>
        </div>
    );
};

export default Home;