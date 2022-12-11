import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { callContext } from '../Context/Context';
import Slide from '../Home/Slide';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    const {change} = useContext(callContext)
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-row'>
                <div  className={`${change?'w-48 z-10 mt-14 h-full':'hidden lg:block'} fixed lg:mt-0 h-full lg:w-56 bg-[#355764] overflow-hidden`}>
                    <Slide></Slide>
                </div>
                <div className={`w-full lg:ml-56 ml-0`}>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Main;