import React from 'react';
import bannerImg from '../../images/bannerImg.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='relative' style={{backgroundImage: `url(${bannerImg})`,height: '600px'}}>
          
            <div className='absolute top-1/3 left-1/3 right-1/3 space-y-2'>
                <h1 className='text-center text-3xl text-white font-bold'>Welcome To My Website</h1>
                <p className='text-white font-semibold'>Shafi Academi is an interactive learning platform offering high-quality coding  courses in various programming languages.The platform also has a unique system.</p>
               <p className='text-center'><Link className='bg-orange-600 px-10 py-2 mt-4 rounded-lg text-white font-semibold'>Get More</Link></p>
            </div>
        
        </div>
    );
};

export default Banner;