import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/my-bg.png'

const Slide = () => {
    return (
        <div className='w-full grid grid-cols-1 text-center pt-2 h-[90vh] z-10'>
            <div className=''>
                <div className='grid justify-items-center'>
                    <img src={img2} className='w-24 h-24 rounded-2xl ' alt=""/>
                </div>
                <h2 className='text-2xl capitalize italic my-4 text-slate-300'>abdul al noman</h2>
                <ul className='flex flex-col items-end ml-3 '>
                    <Link to="/"className='inline-block w-full' href="#banner"><button  className='btn btn-info btn-sm  rounded-l-2xl rounded-none w-full '>Home</button></Link> 
                    <a className='inline-block w-full ' href="#banner"><button className='btn btn-info btn-sm  rounded-l-2xl mt-2 rounded-none w-full '>Banner</button></a>
                    <a className='inline-block w-full' href='#card'><button className='btn btn-info btn-sm w-full my-2 rounded-l-2xl rounded-none'>sites</button></a>
                    <a className='inline-block w-full' href='#about'><button className='btn btn-info btn-sm rounded-l-2xl rounded-none w-full'>about</button></a>
                    <a className='inline-block w-full' href='#contact'><button className='btn btn-info btn-sm mt-2 rounded-l-2xl rounded-none w-full'>contact</button></a>
                </ul>
            </div>
        </div>
    );
};

export default Slide;