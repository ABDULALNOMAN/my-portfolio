import React, { useState } from 'react';
import myResume from '../../assets/abdul al noman.pdf';
import { TypeAnimation } from 'react-type-animation';
import myImg from '../../assets/banner/magicpattern-blob-1688642526922-removebg-preview (2).png'
import waving from '../../assets/banner/Waving-hand.png'
import sideblob from '../../assets/banner/magicpattern-blob-1688810636775.png'
import { easeIn, motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';




const Banner = () => { 
    return (
        <div id='banner' className=''>
            <div id='banner' className=' text-white md:h-[90vh] md:my-0 my-16 w-11/12  mx-auto '>
                <div className=' flex flex-row justify-center items-center h-full   w-full'>
                    <div className=' lg:w-7/12 w-full'>
                        <div>
                            <img className='hand-hello' src={waving} alt="" />
                        </div>
                        <div className='sm:space-y-1'>
                            <h1 className='sm:text-xl text-lg font-bold italic'> hey, i am abdul al noman</h1>
                                <TypeAnimation
                                    sequence={[
                                        2000,
                                        ' front End developer', 
                                        2000,
                                        ' MERN stack developer',
                                        2000,
                                        ' web designer',
                                        () => {}
                                    ]}
                                    wrapper="h3"
                                    cursor={true}
                                    speed={10}
                                    repeat={Infinity}
                                    className='md:text-5xl sm:text-4xl text-3xl font-bold py-2 type_animation text-transparent'
                                />
                            <p className='text-normal capitalize italic'>From Chittagong, Bangladesh. I am a front end developer as well as a learner. I am constantly updating my skills. I love talking to you about it. I have a strong passion for learning and implementing web technologies and standards.</p>
                            <div className='flex justify-start items-center md:gap-x-4 gap-x-7 py-4'>
                                <a href="https://www.facebook.com/profile.php?id=100022732852808" target='_blank'><FaFacebook className='text-blue-700 text-3xl hand-hello delay-1000'></FaFacebook></a>
                                <a href="https://www.linkedin.com/in/abdul-al-noman-187751257/" target='_blank'><FaLinkedin className='text-blue-700 text-3xl hand-hello delay-75'></FaLinkedin></a>
                                <a href="https://github.com/ABDULALNOMAN?tab=repositories" target='_blank'><BsGithub className='text-white text-3xl hand-hello delay-1000'></BsGithub></a>
                            </div>
                            <div className=''>
                                <a href={myResume} download={'abdul al noman.pdf'}>
                                    <button className='btn bg-transparent no-animation hover:bg-transparent btn-primary'>resume</button>
                                </a>
                                <a target={'_blank'} className='ml-2' href="https://www.linkedin.com/in/abdul-al-noman-187751257/">
                                    <button className='btn btn-secondary'>Hire me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 w-0  hidden h-full relative lg:flex justify-center items-center z-0  hand-hello'>
                        <div className='rounded-full border-4 border-cyan-700  absolute top-10 w-24 h-24 left-6 '>
                            <div className='flex justify-center flex-col items-center w-full h-full'>
                                <h6 className='text-lg'>2<sup>+</sup> <sub>years</sub></h6>
                                <p className='text-sm'>experience</p>
                            </div>
                        </div>
                        <img 
                         className='absolute w-[80%] h-[80%] z-10' src={myImg} alt="image" />
                        <div className="absolute w-[70%] h-[70%] blue__gradient" />
                        <div className="absolute w-[90%] h-[90%] hero-gradient" />
                        <img className='absolute w-28 right-5 bottom-14 rotate-45 ' src={sideblob} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;