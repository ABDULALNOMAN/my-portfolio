import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicId = import.meta.env.VITE_PUBLIC_KEY
    const form = useRef()
    const submitEmail = event => {
        event.preventDefault()
        emailjs.sendForm(serviceId, templateId, form.current,publicId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id='contact' className='w-full mx-auto h-full'>
            <form ref={form} onSubmit={submitEmail} className='rounded-2xl h-full border-double p-5 card-gradient md:mx-0 ' action="">
                <div className='grid grid-cols-2 gap-4 mb-4'>
                    <div>
                        <label htmlFor="Name">Name</label>
                        <input type="text"
                            name='to_name'
                            placeholder="enter your name" className="input input-bordered w-full max-w-xs text-slate-300" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name='from_name'
                            placeholder="enter your email" className="input input-bordered w-full max-w-xs text-slate-300" />
                    </div>
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-44 text-slate-300" placeholder="text"></textarea>
                <button className='btn btn-info mt-3' type="submit">send message</button>
            </form>
        </div>
    );
};

export default Contact;