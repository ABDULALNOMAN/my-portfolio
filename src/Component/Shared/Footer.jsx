import React from 'react';
import  logo from '../../assets/logo/abdul-al-noman-low-resolution-logo-color-on-transparent-background.png'
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';


const Footer = () => {
    return (
        <div>
            <footer className="footer card-gradient p-10 text-white">
                <div>
                    <img className='w-32' src={logo} alt="" />
                    <p>Transforming Ideas into Digital Reality!</p>
                    <div className='flex justify-start items-center gap-4'>
                        <FaFacebook className='text-blue-700 text-3xl'></FaFacebook>
                        <FaLinkedin className='text-blue-700 text-3xl'></FaLinkedin>
                        <FaWhatsapp className='text-green-700 text-3xl'></FaWhatsapp>
                    </div>
                </div> 
                <div>
                    <span className="footer-title">link</span> 
                    <a className="link link-hover">home</a> 
                    <a className="link link-hover">about</a> 
                    <a className="link link-hover">project</a> 
                    <a className="link link-hover">contect</a>
                </div> 
                <div>
                    <span className="footer-title">service</span> 
                    <p className="">web design</p> 
                    <p className="">web development</p> 
                </div> 
                <div>
                    <span className="footer-title">official info</span> 
                    <div className='flex justify-start items-center gap-2'>
                        <MdLocationPin className='text-xl'></MdLocationPin>
                        <span className=""> north madarsha</span> 
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <FaPhoneAlt className='text-xl'></FaPhoneAlt>
                        <p className="">+8801639941361</p> 
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;