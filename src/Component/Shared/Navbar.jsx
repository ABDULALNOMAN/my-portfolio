import React, { useContext } from 'react';
import { callContext } from '../Context/Context';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {setChange , change} = useContext(callContext)
    return (
        <div className='z-20 sticky top-0'>
            <div className="bg-slate-800 lg:hidden h-16 w-full px-6">
                <div className="flex flex-row justify-between h-full items-center">
                    <div className=''>
                        <Link to={'/'} className=" text-xl text-slate-300 capitalize">abdul al noman</Link> 
                    </div>
                    <label onClick={()=>setChange(!change)} tabIndex={0} className="lg:hidden text-white text-3xl">
                        {change ? <RxCross2></RxCross2>:<FiMenu></FiMenu>}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;