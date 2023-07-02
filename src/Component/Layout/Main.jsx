import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { callContext } from '../Context/Context';
import Slide from '../Home/Slide';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    const {change} = useContext(callContext)
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <div className='flex lg:h-screen min-h-screen'>
                <div  className={`${change?'translate-x-0 ease-out'
                :'-translate-x-full ease-in'} lg:w-80 w-64 lg:translate-x-0 lg:static fixed transition-transform duration-300 bg-[#000000] z-10 lg:h-full min-h-screen`}>
                    <Slide></Slide>
                </div>
                <div className={`w-full lg:overflow-y-scroll`}>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Main;