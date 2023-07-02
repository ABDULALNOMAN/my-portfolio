import React from 'react';
// import myImg from '../../assets/my-bg.png'
import myResume from '../../assets/myResume.pdf';
import { TypeAnimation } from 'react-type-animation';
import myImg from '../../assets/20221222_112301-removebg-preview.png'

const Banner = () => {
    const ref = React.createRef();
    return (
        <div id='banner' className='font-serif bg-banner-image bg-no-repeat text-white'>
            <div className='container mx-auto h-[90vh] flex flex-row justify-center items-center '>
                <div className='md:w-1/2 w-0 md:flex items-center hidden'>
                    <img  className='w-full h-full p-10 ' src={myImg} alt="" />
                </div>
                <div className='md:mx-0 mx-10'>
                    <h4 className='text-xl'>Hello world</h4>
                    <h1 className='text-5xl font-bold mb-4'>i'm abdul al n<span className='animate-pulse'>o</span>man</h1>
                    <h3 className='text-xl capitalize'>a 
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
                                fontSize: '1em',
                                display: 'inline',
                                color: "red",
                                fontWeight:"bold"
                            }}
                        />
                    </h3>
                    <p className='font-serif text-lg text-normal capitalize my-3 '>From Chittagong, Bangladesh. I am a front end developer as well as a learner. I am constantly updating my skills. I love talking to you about it. I have a strong passion for learning and implementing web technologies and standards.</p>
                    <a href={myResume}
                        download={'my resume.pdf'}
                    > <button className='btn btn-info'>resume</button></a>
                    <a target={'_blank'} className='ml-2' href="https://www.linkedin.com/in/abdul-al-noman-187751257/">
                        <button className='btn btn-warning'>Hire me</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;