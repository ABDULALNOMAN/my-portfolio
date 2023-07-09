import React from 'react'
import Contact from './Contact'
import Leaflat from './Leaflat'

const ContactParents = () => {
  return (
    <div className='lg:mx-14 md:mx-7 mx-4 my-14'>
        <div className='text-center'>
            <h3 className='text-4xl text-blue-700 font-bold'>contact</h3>
            <div className='flex gap-2 justify-center mt-4'>
                <span className='border border-x-0 border-b-0 w-10'></span>
                <span className='border border-x-0 border-b-0 w-10 border-blue-700'></span>
                <span className='border border-x-0 border-b-0 w-10'></span>
            </div>
        </div>
      <div className='flex md:flex-row flex-col gap-4 justify-between items-center md:h-[400px] mt-8'>
        <div className='md:w-6/12 md:h-full z-0 h-[400px] w-11/12'>
            <Leaflat></Leaflat>
        </div>
        <div className='md:w-6/12 w-11/12 h-full'>
            <Contact></Contact>     
        </div>
      </div>
    </div>
  )
}

export default ContactParents
