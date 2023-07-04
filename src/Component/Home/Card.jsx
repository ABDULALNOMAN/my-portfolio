import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../../../styles/styles.css';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Card = () => {
    const [widthNum , setWidthNum] = useState(1)
    const widthFunc =()=>{
        const width = window.innerWidth
        if(width<768){return setWidthNum(1)}
        if(width<1224){return setWidthNum(2)}
        else{return setWidthNum(3)}
    }
    setInterval(widthFunc, 1000)
    const items =[
        {
            "index":1,
            "img":"https://i.ibb.co/kQzP12K/Screenshot-40.png",
            "name": "gsmarea",
            "description":"gsm area is a site for selling second-hand mobiles. It can include users and sellers. The seller can sell his product. Users can review products or buy products"
        },
        {
            "index":2,
            "img":"https://i.ibb.co/hdCPF2L/Screenshot-41.png",
            "name": "wild photography",
            "description":"Wild Photography Site is a personal site for selling wild photos. Users can view products and everything else when they are logged in"
        },
        {
            "index":3,
            "name":"learning site",
            "img":"https://i.ibb.co/VB8ydFW/Screenshot-42.png",
            "description":"Learning site programming learning site. A user can select his/her preferred programming after logging in. Users can download any programming section if they like it"
        },
        {
            "index":4,
            "name":"learning site",
            "img":"https://i.ibb.co/VB8ydFW/Screenshot-42.png",
            "description":"Learning site programming learning site. A user can select his/her preferred programming after logging in. Users can download any programming section if they like it"
        }
    ]
    return (
        <div id='card' className=' '>
            <div>
                <h3 className='text-center text-4xl text-blue-700'>project</h3>  
                <div className='flex gap-2 justify-center mt-4'>
                    <span className='border border-x-0 border-b-0 w-10'></span>
                    <span className='border border-x-0 border-b-0 w-10 border-blue-700'></span>
                    <span className='border border-x-0 border-b-0 w-10'></span>
                </div>
                <div className='my-8 text-center mx-40'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus dolorum libero quidem illum voluptatem reiciendis distinctio quia architecto quos. </h3>
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
                <div className=' text-base py-16 '>
                    {items.map((item)=>(
                        <SwiperSlide key={item.index}>
                            <div className='card-gradient md:h-[400px] flex flex-col justify-between items-start p-3 rounded-tl-3xl rounded-br-3xl'>
                                <div className=''>
                                    <img className='w-full h-full rounded-lg' src={item.img} alt="" />
                                </div>
                                <h3 className='font-bold text-xl'>{item.name}</h3>
                                <p className='text-sm'>{item.description}</p>
                                <div className='flex items-center justify-start gap-x-4'>
                                    <button><a className='btn btn-primary btn-sm' href="" target='_blank'>live</a></button>
                                    <button><Link className='btn btn-info btn-sm' to={`/products/${item.index}`}>click</Link></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Card;
