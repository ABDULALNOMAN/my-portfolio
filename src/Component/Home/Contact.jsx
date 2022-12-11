import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef()
    const submitEmail = event => {
        event.preventDefault()
        emailjs.sendForm(import.meta.env.SERVICE_ID, import.meta.env.TEMPLATE_ID, form.current, import.meta.env.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id='contact' className='lg:w-7/12 md:w-9/12 mx-auto my-10'>
            <h2 className='text-4xl capitalize font-serif text-center mb-6 font-semibold underline'>contact</h2>
            <form ref={form} onSubmit={submitEmail} className='border-4 rounded-2xl border-double p-5 bg-slate-300 md:mx-0 mx-10' action="">
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
                <button className='btn btn-info' type="submit">send message</button>
            </form>
        </div>
    );
};

export default Contact;