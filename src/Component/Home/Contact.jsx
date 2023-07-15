import emailjs from '@emailjs/browser';
import { accent, success } from 'daisyui/src/colors';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    localStorage.theme ="light"
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicId = import.meta.env.VITE_PUBLIC_KEY
    const submitEmail = event => {
        event.preventDefault()
        emailjs.sendForm(serviceId, templateId, event?.target, publicId)
        .then((result) => {
            if(result?.text){
                toast.success("successfully")
                event.target.reset()
            }
        }, (error) => {
            error.text && toast.error("error")
        });
  };
    return (
        <motion.div whileInView={{y:0, opacity:1}} animate={{y:300, opacity:0}} viewport={{once:true}} id='contact' className='w-full mx-auto h-full'>
            <form onSubmit={(event)=>submitEmail(event)} className='rounded-2xl h-full border-double p-5 card-gradient md:mx-0  text-white flex flex-col justify-around items-start' action="">
                <div className='grid grid-cols-2 gap-4 mb-3 w-full'>
                    <div>
                        <label htmlFor="Name">Name</label>
                        <input type="text"
                            name='user_name'
                            placeholder="enter your name" className="input input-bordered w-full text-black" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name='user_email'
                            placeholder="enter your email" className="input input-bordered w-full text-black" data-msg="please write" />
                    </div>
                </div>
                <div className='flex flex-col items-start mb-5 w-full'>
                    <label htmlFor="subject">subject</label>
                    <input type="text" placeholder='subject' className='input input-bordered w-full text-black' name="subject" />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-full text-black" data-msg="please write something for me" required placeholder="description"></textarea>
                <button className={` btn mt-3 btn-primary`} type="submit">send message</button>
            </form>
        </motion.div>
    );
};

export default Contact;