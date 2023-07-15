import React, { useContext, useState } from 'react';
import { callContext } from '../Context/Context';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/abdul-al-noman-low-resolution-logo-color-on-transparent-background.png'

const Navbar = () => {
    const {setChange , change} = useContext(callContext)
    return (
        <div className='z-40 sticky top-0'>
            <div className=" bg-slate-800 navbar text-white lg:px-12 px-4">
                <div className='navbar-start'>
                    <Link to={'/'} className=""><img className='w-44 py-1' src={logo} alt="logo" /></Link> 
                </div> 
                <div className='navbar-end'>
                    <label onClick={()=>setChange(!change)} tabIndex={0} className="lg:hidden text-white text-3xl">
                        {change ? <RxCross2></RxCross2>:<FiMenu></FiMenu>}
                    </label>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={"/"}>home</Link></li>
                            <li><a href='#banner'>banner</a></li>
                            <li><a href="#about">about</a></li>
                            <li><a href='#project'>project</a></li>
                            <li><a href='#contact'>contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;