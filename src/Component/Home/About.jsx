import React from 'react';

const About = () => {
    return (
        <div id='about' className='my-12 py-10 z-10'>
            <div className='text-center mb-4'>
                <h1 className='text-4xl text-blue-700'>About me</h1>
            </div>
            <div className='flex gap-2 justify-center'>
                <span className='border border-x-0 border-b-0 w-10'></span>
                <span className='border border-x-0 border-b-0 w-10 border-blue-700'></span>
                <span className='border border-x-0 border-b-0 w-10'></span>
            </div>
            <div className='md:col-span-2 col-span-3 md:mx-0 mx-4'>
                <p className='text-lg font-serif lg:mx-40  md:mx-20 mx-6 text-center my-10'>Hello! Abdul Al Noman is a self-motivated and passionate web developer. I have been learning web development for 1.5 years. I learned JavaScript, React js, Node js, MongoDB and Express js during this time. I am constantly upgrading my skills to make an impact in web development</p>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-16 gap-x-16 gap-y-6'>
                    <div>
                        <div className='flex justify-between w-10/12 items-center'>
                            <p>html</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between w-10/12 items-center'>
                            <p>css</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between w-10/12 items-center'>
                            <p>JavaScript</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between w-10/12 items-center'>
                            <p>react</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between w-10/12 items-center'>
                            <p>Express</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                    <div>
                        <div className='flex justify-between w-10/12 items-center'>
                            <p>tailwind</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;