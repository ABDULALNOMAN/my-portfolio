import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/my-bg.png'
import logo from '../../assets/logo/abdul-al-noman-low-resolution-logo-color-on-transparent-background.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';



const Slide = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex flex-col lg:gap-0 gap-6 justify-around lg:pt:0 pt-3 h-screen'>
                <div>
                    <img className='w-full h-12 px-10' src={logo} alt="logo" />
                </div>
                <div className=''>
                    <img src={img2} className='lg:w-8/12 w-6/12 rounded-2xl mx-auto' alt=""/>
                    <h2 className=' capitalize italic text-white text-center text-2xl'>abdul al noman</h2>
                </div>
                <ul className='flex flex-col text-center text-white justify-between gap-2 px-4'>
                    <Link to="/"className='' href="#banner"><button  className='w-full py-1 btn btn-sm'>Home</button></Link> 
                    <a className='' href="#banner"><button className='w-full py-1 btn btn-sm'>Banner</button></a>
                    <a className='' href='#card'><button className='w-full py-1 btn btn-sm '>sites</button></a>
                    <a className='' href='#about'><button className=' w-full py-1 btn btn-sm '>about</button></a>
                    <a className='' href='#contact'><button className='w-full py-1 btn btn-sm'>contact</button></a>
                </ul>
                <div className='text-white text-center text-2xl flex items-center justify-evenly'>
                <a href="https://www.facebook.com/profile.php?id=100022732852808" target='_blank'><FaFacebook className='text-blue-700 text-3xl hand-hello delay-1000'></FaFacebook></a>
                <a href="https://www.linkedin.com/in/abdul-al-noman-187751257/" target='_blank'><FaLinkedin className='text-blue-700 text-3xl hand-hello delay-75'></FaLinkedin></a>
                <a href="https://github.com/ABDULALNOMAN?tab=repositories" target='_blank'><BsGithub className='text-white text-3xl hand-hello delay-1000'></BsGithub></a>
                </div>
            </div>
        </div>
    );
};

export default Slide;