import React from 'react';
import about from '../../assets/undraw_profile_re_4a55.svg'

const About = () => {
    return (
        <div id='about' className='my-12 bg-slate-300 py-10 shadow-lg shadow-slate-600'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl underline font-serif font-semibold'>About me</h1>
            </div>
            <div className='grid grid-cols-3 gap-8 h-full  '>
                <div className='md:block hidden col-span-1'>
                    <img src={about} alt="" />
                </div>
                <div className='md:col-span-2 col-span-3 md:mx-0 mx-4'>
                    <p className='text-lg font-serif'>Hello! Abdul Al Noman is a self-motivated and passionate web developer. I have been learning web development for 1.5 years. I learned JavaScript, React js, Node js, MongoDB and Express js during this time. I am constantly upgrading my skills to make an impact in web development</p>
                    <p className='border-b-4 border-black my-4'></p>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-6'>
                        <div>
                            <p className='font-serif'><span className='text-lg text-cyan-900'>Name: </span>Abdul al noman</p>
                            <p className='font-serif'><span className='text-lg text-cyan-900'>Age: </span>21 Years</p>
                        </div>
                        <div>
                            <p className='font-serif'><span className='text-lg text-cyan-900'>Email: </span>nomanmd1st2001@gmail.com</p>
                            <p className='font-serif'><span className='text-lg text-cyan-900'>From: </span>Chittagong, bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;