import React from 'react';
import Carditem from './Carditem';

const Card = () => {
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
        }
    ]
    return (
        <div id='card' className='container mx-auto'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-serif underline font-semibold'>project</h1>
            </div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-3 my-4 md:mx-0 mx-10'>
                {
                    items.map(item=><Carditem key={item.index} item={item}></Carditem>)
                }
            </div>
        </div>
    );
};

export default Card;