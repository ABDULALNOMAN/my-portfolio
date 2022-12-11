import React, { useContext } from 'react';
import { callContext } from '../Context/Context';
import logo from '../../assets/360_F_406926005_dGy1iIhhadwEGOTFJjw2q1ir7lrYjg3C.jpg';

const Navbar = () => {
    const {setChange , change} = useContext(callContext)
    return (
        <div className='relative z-10'>
            <div className="bg-base-100 lg:hidden h-14 fixed w-full">
                <div className="flex flex-row justify-between h-full items-center">
                    <div className='flex flex-row items-center ml-10'>
                        <img className='w-10 h-10 rounded-full' src={logo} alt="" />
                        <a className="btn btn-ghost normal-case text-xl text-slate-300 font-serif">abdul al noman</a>
                    </div>
                    <label onClick={()=>setChange(!change)} tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;