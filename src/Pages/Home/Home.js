import React from 'react';
import Slots from '../Slots/Slots';
import Reviews from '../Reviews/Reviews';
import Howwork from './Howwork/Howwork';
import Offerbanner from './Offerbanner/Offerbanner';
import Carousel from './Carousel/Carousel';

const Home = () => {
    return (
        <>
            <Carousel></Carousel>
            <Offerbanner></Offerbanner>
            <Slots></Slots>
            <Howwork></Howwork>
            <Reviews></Reviews>
        </>
    );
};

export default Home;