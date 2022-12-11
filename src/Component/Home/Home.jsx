import React, { useContext } from 'react';
import { callContext } from '../Context/Context';
import About from './About';
import Banner from './Banner';
import Card from './Card';
import Contact from './Contact';
import Slide from './Slide';

const Home = () => {
    const { change } = useContext(callContext)
    return (
        <div>
            <Banner></Banner>
            <Card></Card> 
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home