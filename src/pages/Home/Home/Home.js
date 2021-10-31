import React from 'react';
import Header from '../Header/Header'
import Services from '../services/Services';
import UpComingEvents from '../Upcoming/UpComingEvents';
import Footer from './footer/Footer';
import Logos from './logos/Logos';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <UpComingEvents></UpComingEvents>
            <Logos></Logos>
            <Footer></Footer>
        </div>
    );
};

export default Home;