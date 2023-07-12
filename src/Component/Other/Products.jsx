import React, { useEffect} from 'react';
import { useLoaderData} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
    const data = useLoaderData()
    const { _id, index, name, Features, Techonology, client, images, live, server, } = data
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='mt-16 lg:mt-0'>
            <div className='text-center text-4xl font-semibold font-serif mb-4'>
                <h1 className='underline italic'>{name}</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 px-3 mx-auto'>
                {
                    images?.map((item,id )=> <img className='w-full h-48' key={id} src={item.img} alt="" />)
                }
            </div>
            <div className='lg:w-6/12 md:w-8/12 flex flex-row justify-around my-8'>
                <a target={'_blank'} href={live}><button className='btn btn-info'>live site</button></a>
                <a target={'_blank'} href={client}><button className='btn btn-primary'>github client</button></a>
                <a target={'_blank'} href={server}><button className='btn btn-warning'>github server</button></a>
            </div>
            <div className='grid md:grid-cols-2 gap-4 px-3 my-4'>
                <div data-aos="fade-right" data-aos-duration="2000" className='bg-slate-300 shadow-lg shadow-slate-700 p-4 rounded-tr-2xl rounded-bl-2xl'>
                    <h1 className='text-3xl underline font-serif font-semibold capitalize mb-4'>features</h1>
                    <div className='ml-16'>
                        <ul className='list-disc'>
                            {
                                Features?.map((data, id) =><li className='text-lg font-serif' key={id}>{data.FeatureData}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-duration="3000" className='bg-slate-300 shadow-lg shadow-slate-700 p-4 rounded-tr-2xl rounded-bl-2xl'> 
                    <h1 className='text-3xl underline font-serif font-semibold capitalize'>Techonology</h1>
                    <div className='ml-16'>
                        {
                            Techonology?.map((item, id) => <ul className='list-disc' key={id}>
                                <li className='text-lg font-serif'>{item?.Tech}</li>
                            </ul>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;