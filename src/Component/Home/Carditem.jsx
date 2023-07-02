import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carditem = ({ item }) => {
    const { img, description, name, index } = item
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="w-full bg-slate-300 shadow-lg relative shadow-slate-600">
            <div className='p-3'>
                <figure><img data-aos="zoom-in" className='rounded-t-xl ' src={img} alt="Shoes" /></figure>
                <div className="mt-2 lg:h-52 md:h-48 h-40">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex flex-row justify-start absolute bottom-3">
                        <button className='btn btn-info btn-sm'>
                            <a target={'_blank'}  href="https://gsmarea-45afe.firebaseapp.com/">live site</a>
                        </button>
                        <Link  to={`/products/${index}`}><button onClick={()=>setLoding(true)} className='ml-2 btn btn-primary btn-sm'>details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carditem;