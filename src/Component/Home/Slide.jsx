import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/my-bg.png'
import { BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';

const Slide = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex flex-col lg:gap-0 gap-6 justify-around lg:pt:0 pt-3 h-full'>
                <div className=''>
                    <img src={img2} className='lg:w-8/12 w-6/12 rounded-2xl mx-auto' alt=""/>
                </div>
                <h2 className=' capitalize italic text-white text-center text-2xl'>abdul al noman</h2>
                <ul className='flex flex-col text-center text-white justify-between gap-2 px-4'>
                    <Link to="/"className='' href="#banner"><button  className='w-full py-1 btn btn-sm'>Home</button></Link> 
                    <a className='' href="#banner"><button className='w-full py-1 btn btn-sm'>Banner</button></a>
                    <a className='' href='#card'><button className='w-full py-1 btn btn-sm '>sites</button></a>
                    <a className='' href='#about'><button className=' w-full py-1 btn btn-sm '>about</button></a>
                    <a className='' href='#contact'><button className='w-full py-1 btn btn-sm'>contact</button></a>
                </ul>
                <div className='text-white text-center text-2xl flex items-center justify-evenly'>
                    <BsFacebook className='text-sky-700'></BsFacebook>
                    <BsGithub></BsGithub>
                    <BsLinkedin></BsLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Slide;