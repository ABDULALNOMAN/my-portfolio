import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React from 'react';
import Error from '../Other/Error';
import Loading from '../Other/Loading';

const About = () => {
  const {data:datas=[], isLoading, error} = useQuery({
    queryKey:["abouts"],
    queryFn:async()=>{
      const res = await fetch("http://localhost:5000/abouts")
      const data = await res.json()
      return data
    }
  })
    return (
        <div id='about' className='my-12 py-10'>
            <div className='text-center mb-4 '>
                <h1 className='text-4xl font-bold text-blue-700'>About me</h1>
            </div>
            <div className='flex gap-2 justify-center'>
                <span className='border border-x-0 border-b-0 w-10'></span>
                <span className='border border-x-0 border-b-0 w-10 border-blue-700'></span>
                <span className='border border-x-0 border-b-0 w-10'></span>
            </div>
            <p className='lg:mx-40 italic md:mx-20 mx-6 text-center my-10'>Hello! Abdul Al Noman is a self-motivated and passionate web developer. I have been learning web development for 1.5 years. I learned JavaScript, React js, Node js, MongoDB and Express js during this time. I am constantly upgrading my skills to make an impact in web development</p>
            <div className='md:col-span-2 col-span-3 sm:w-11/12 w-7/12 mx-auto'>
                {isLoading && <Loading></Loading>}
                <motion.div whileInView={{x:0, opacity:1}} initial={{x:300,opacity:0}} viewport={{once:true}} className='grid sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 gap-x-6 gap-y-6'>
                    {datas?.length ? datas?.map((data)=>(
                        <div key={data?.index} className='rounded-xl p-6 text-center card-gradient'>
                            <img className='w-full h-32' src={data?.picture} alt="picture" />
                            <h3 className='mt-2 text-lg'>{data?.name}</h3>
                        </div>
                    )):""}
                </motion.div>
                {error && <Error></Error>}
            </div>
        </div>
    );
};

export default About;