import React from 'react';

const About = () => {
    const datas = [
        {
          "index": 0,
          "picture": "/src/assets/about/js.png",
          "name": "javaScript",
        },
        {
          "index": 1,
          "picture": "/src/assets/about/react.png",
          "name": "React",
        },
        {
          "index": 2,
          "picture": "/src/assets/about/mongoDB.png",
          "name": "mongoDB",
        },
        {
          "index": 3,
          "picture": "/src/assets/about/express.png",
          "name": "Express",
        },
        {
          "index": 4,
          "picture": "/src/assets/about/tailwindcss.png",
          "name": "Tailwind CSS",
        },
        {
          "index": 5,
          "picture": "/src/assets/about/bootstrap.png",
          "name": "Bootstrap",
        },
        {
          "index": 6,
          "picture": "/src/assets/about/html-5.png",
          "name": "html",
        },
        {
          "index": 7,
          "picture": "/src/assets/about/css-3.png",
          "name": "css",
        },
        {
          "index": 8,
          "picture": "/src/assets/about/node-js.png",
          "name": "node",
        },
        {
          "index": 9,
          "picture": "/src/assets/about/api.png",
          "name": "rest api",
        },
        {
          "index": 10,
          "picture": "/src/assets/about/jwt.png",
          "name": "jwt token",
        },
      ]
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
                <div className='grid sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 gap-x-6 gap-y-6'>
                    {datas.map((data)=>(
                        <div key={data?.index} className='rounded-xl p-6 text-center card-gradient'>
                            <img className='w-full h-32' src={data?.picture} alt="picture" />
                            <h3 className='mt-2 text-lg'>{data?.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;