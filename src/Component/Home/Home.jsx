import React, { useContext } from 'react';
import { callContext } from '../Context/Context';
import About from './About';
import Banner from './Banner';
import Card from './Card';
import Advice from './Advice';
import ContactParents from './ContactParents';

const Home = () => {
    const { change } = useContext(callContext)
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Card></Card> 
            <Advice></Advice>
            <ContactParents></ContactParents>
        </div>
    );
};

export default Home