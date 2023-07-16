import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='text-center'>
            <p className='text-6xl '>404</p>
            <p>go to <Link to={"/"} className='btn-link'>home</Link></p>
        </div>
    </div>
  )
}

export default Error
