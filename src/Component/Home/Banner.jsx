import React from 'react';
import myResume from '../../assets/myResume.pdf';
import { TypeAnimation } from 'react-type-animation';
import myImg from '../../assets/banner/magicpattern-blob-1688642526922-removebg-preview (2).png'
import waving from '../../assets/banner/Waving-hand.png'
import sideblob from '../../assets/banner/magicpattern-blob-1688810636775.png'



const Banner = () => {
    const ref = React.createRef();
    return (
        <div className=''>
            <div id='banner' className=' text-white h-[90vh] w-11/12  mx-auto'>
                <div className=' flex flex-row justify-center items-center h-full   w-full'>
                    <div className=' w-7/12 '>
                        <div>
                            <img src={waving} alt="" />
                        </div>
                        <div className='space-y-5'>
                            <h1 className='text-2xl font-bold italic mb-4'> hey, i am abdul al noman</h1>
                            <h3 className='text-xl capitalize'>
                            <TypeAnimation
                                sequence={[
                                    2000,
                                    ' front End developer', 
                                    2000,
                                    ' MERN stack developer',
                                    2000,
                                    ' web designer',
                                    () => {}
                                ]}
                                wrapper="h3"
                                cursor={true}
                                speed={10}
                                repeat={Infinity}
                                    style={{
                                        fontSize: '3rem',
                                         padding:"12px 0px ",
                                        color: "hero-gradient",
                                        fontWeight:"bold",
                                        background:"linear-gradient(45deg, #f3ec78, #af4261)",
                                        WebkitBackgroundClip:"text",
                                        WebkitTextFillColor:"transparent",
                                    }}
                                />
                            </h3>
                            <p className='font-serif text-lg text-normal capitalize italic'>From Chittagong, Bangladesh. I am a front end developer as well as a learner. I am constantly updating my skills. I love talking to you about it. I have a strong passion for learning and implementing web technologies and standards.</p>
                            <div>
                                <a href={myResume} download={'abdul al noman.pdf'}>
                                    <button class='btn bg-transparent no-animation primary-animation'>resume</button>
                                </a>
                                <a target={'_blank'} className='ml-2' href="https://www.linkedin.com/in/abdul-al-noman-187751257/">
                                    <button className='btn btn-warning hover:w-40'>Hire me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-5/12 h-full relative flex justify-center items-center z-0 '>
                        <div className='rounded-full border-4 border-cyan-700  absolute top-10 w-24 h-24 left-6 '>
                            <div className='flex justify-center flex-col items-center w-full h-full'>
                                <h6 className='text-lg'>2<sup>+</sup> <sub>years</sub></h6>
                                <p className='text-sm'>exparence</p>
                            </div>
                        </div>
                        <img className='absolute w-[80%] h-[80%] z-10 ' src={myImg} alt="" />
                        <div className="absolute w-[70%] h-[70%] blue__gradient" />
                        <div className="absolute w-[90%] h-[90%] hero-gradient" />
                        <img className='absolute w-28 right-10 bottom-14 rotate-45' src={sideblob} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;