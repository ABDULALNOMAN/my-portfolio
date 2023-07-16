import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query'
import Loading from '../Other/Loading';
import Error from '../Other/Error';

const Card = () => {
    const [widthNum , setWidthNum] = useState(1)
    const widthFunc =()=>{
        const width = window.innerWidth
        if(width<768){return setWidthNum(1)}
        if(width<1224){return setWidthNum(2)}
        else{return setWidthNum(3)}
    }
    setInterval(widthFunc, 1000)

    const {isLoading, error, data:items=[]} = useQuery({
        queryKey:["projectdata"],
        queryFn:async()=>{
            const res = await fetch("http://localhost:5000/projectdata")
            const data = res.json()
            return data
        }
    })
    return (
        <div id='project' className=' '>
            <div>
                <h3 className='text-center text-4xl text-blue-700 font-bold'>project</h3>  
                <div className='flex gap-2 justify-center mt-4'>
                    <span className='border border-x-0 border-b-0 w-10'></span>
                    <span className='border border-x-0 border-b-0 w-10 border-blue-700'></span>
                    <span className='border border-x-0 border-b-0 w-10'></span>
                </div>
                <div className='my-8 text-center w-11/12 mx-auto'>
                    <h3>Some of my developed applications. I am still working on some applications. Which will be added to the project after complect.</h3>
                </div>
            </div>
            <Swiper 
                style={{
                    "--swiper-pagination-color": "#0E3386",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
                slidesPerView={widthNum}
                spaceBetween={30}
                className="pb-14 lg:mx-14 md:mx-7 mx-2"
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <div className='py-16'>
                    {isLoading && <Loading></Loading>}
                    {items?.length ? items?.map((item)=>(
                        <SwiperSlide key={item._id}>
                            <div className='card-gradient md:h-[380px] flex flex-col justify-between items-start p-3 rounded-tl-3xl rounded-br-3xl'>
                                <div className=''>
                                    <img className='w-full h-full rounded-lg' src={item?.img} alt="" />
                                </div>
                                <h3 className='font-bold text-xl'>{item?.name}</h3>
                                <p className='text-sm'>{item?.description}</p>
                                <div className='flex items-center justify-start gap-x-4'>
                                    <button><a className='btn btn-primary btn-sm' href={item?.site} target='_blank'>site</a></button>
                                    <button><Link className='btn btn-sm btn-secondary' to={`/products/${item?._id}`}>click</Link></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )):""}
                    {error && <Error></Error>}
                </div>
            </Swiper>
        </div>
    );
};

export default Card;
