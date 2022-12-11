import React from 'react';
import img2 from '../../assets/photostudio-4-designify.png'

const Slide = () => {
    return (
        <div className='w-full grid grid-cols-1 text-center pt-2 h-[90vh]'>
            <div className=''>
                <div className='grid justify-items-center'>
                    <img src={img2} className='w-24 h-24 rounded-2xl ' alt=""/>
                </div>
                <h2 className='text-2xl capitalize italic my-4 text-slate-300'>abdul al noman</h2>
                <ul className='grid grid-cols-1 gap-y-1'>
                    <button  className='btn btn-info btn-sm mx-3'><a href="#banner">Home</a></button>
                    <button className='btn btn-info btn-sm mx-3 my-2'><a href='#card'>sites</a></button>
                    <button className='btn btn-info mx-3 btn-sm'><a href='#about'>about</a></button>
                    <button className='btn btn-info mx-3 btn-sm mt-2'><a href='#contact'>contact</a></button>
                </ul>
            </div>
        </div>
    );
};

export default Slide;