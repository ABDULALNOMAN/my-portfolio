import React from 'react';
import cardImg1 from '../../assets/Cardimg/Screenshot 2022-12-11 115620.png'
import cardImg2 from '../../assets/Cardimg/Screenshot 2022-12-11 115746.png'
import cardImg3 from '../../assets/Cardimg/Screenshot 2022-12-11 115818.png'

const Card = () => {
    return (
        <div id='card' className='container mx-auto'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-serif underline font-semibold'>project</h1>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-3 my-4 md:mx-0 mx-10'>
                <div className="w-full bg-slate-300 shadow-lg relative shadow-slate-600">
                    <div className='p-3'>
                        <figure><img className='rounded-t-xl' src={cardImg1} alt="Shoes" /></figure>
                        <div className="mt-2 lg:h-52 md:h-48 h-40">
                            <h2 className="card-title">
                            gsmarea
                            </h2>
                            <p>gsm area is a site for selling second-hand mobiles. It can include users and sellers. The seller can sell his product. Users can review products or buy products</p>
                            <div className="flex flex-row justify-start absolute bottom-3">
                                <button className='btn btn-info btn-sm'>
                                    <a target={'_blank'}  href="https://gsmarea-45afe.firebaseapp.com/">live site</a>
                                </button>
                                <button className='btn btn-primary ml-2 btn-sm' >
                                    <a target={'_blank'} href="https://github.com/ABDULALNOMAN/used-products-resale-client">github client</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-slate-300 shadow-lg relative shadow-slate-600">
                    <div className='p-3'>
                         <figure><img className='rounded-t-xl' src={cardImg2} alt="Shoes" /></figure>
                        <div className="mt-2 lg:h-52 md:h-48 h-40">
                            <h2 className="card-title">
                            wild photography
                            </h2>
                            <p>Wild Photography Site is a personal site for selling wild photos. Users can view products and everything else when they are logged in</p>
                            <div className="flex flex-row justify-start absolute bottom-3">
                                <button className='btn btn-info btn-sm'>
                                    <a target={'_blank'} href="https://fullfile-creative.firebaseapp.com/">live site</a>
                                </button>
                                <button className='btn btn-warning ml-2 btn-sm'>
                                    <a target={'_blank'} href="https://github.com/ABDULALNOMAN/wild-photography-portfolio">github client</a>
                                </button>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="w-full bg-slate-300 shadow-lg relative shadow-slate-600">
                    <div className='p-3'>
                        <figure><img className='rounded-t-xl' src={cardImg3} alt="Shoes" /></figure>
                        <div className="mt-2 lg:h-52 md:h-48 h-40 ">
                            <h2 className="card-title">
                            learning site
                            </h2>
                            <p>Learning site programming learning site. A user can select his/her preferred programming after logging in. Users can download any programming section if they like it</p>
                            <div className="flex flex-row absolute bottom-3">
                                <button className='btn btn-success btn-sm'>
                                    <a target={'_blank'} href="https://information-technology-d22c2.web.app/">live site</a>
                                </button>
                                <button className='btn btn-accent ml-2 btn-sm'>
                                    <a target={'_blank'}  href="https://github.com/ABDULALNOMAN/learning-platform-client">github client</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;