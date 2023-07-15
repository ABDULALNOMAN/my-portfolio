import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Products = () => {
    const data = useLoaderData()
    const { _id, index, name, Features, Techonology, client, images, live, server, } = data
    return (
        <div className='mt-16 lg:mt-0'>
            <div className='text-center text-4xl font-semibold mb-4'>
                <h1 className=' text-blue-700 mb-8 mt-14'>{name}</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3 mx-auto'>
                {
                    images?.map((item,id )=>(
                        <div>
                            <img className={`w-full h-52 rounded-md`} key={id} src={item.img} alt="" />
                        </div>
                    ))
                }
            </div>
            <div>
                <h2 className='text-4xl text-center font-bold text-blue-700 mt-20 mb-8'>Techonology and features</h2>
                <div className='grid md:grid-cols-2 gap-4 px-3 my-4'>
                    <div className='card-gradient p-4 shadow-lg shadow-slate-700 rounded-tr-2xl rounded-bl-2xl'>
                        <h1 className='text-2xl underline  font-semibold capitalize mb-4 italic'>features</h1>
                        <div className='ml-16'>
                            <ul className='list-disc '>
                                {
                                    Features?.map((data, id) =><li className='italic' key={id}>{data.FeatureData}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='card-gradient shadow-lg shadow-slate-700 p-4 rounded-tr-2xl rounded-bl-2xl'> 
                        <h1 className='underline font-semibold capitalize text-2xl italic'>Techonology</h1>
                        <div className='ml-16'>
                            {
                                Techonology?.map((item, id) => <ul className='list-disc italic' key={id}>
                                    <li className='text-lg font-serif'>{item?.Tech}</li>
                                </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-blue-700 text-3xl italic text-center font-bold mb-6 my-14'>direction</h2>
                <div className='lg:w-4/12 md:w-4/12 flex flex-row justify-center w-full gap-x-6 items-center mx-auto'>
                    <a target={'_blank'} href={live}><button className='btn btn-info'>live site</button></a>
                    <a target={'_blank'} href={client}><button className='btn btn-primary'>github client</button></a>
                    <a target={'_blank'} href={server}><button className='btn btn-warning'>github server</button></a>
                </div>
            </div>
        </div>
    );
};

export default Products;