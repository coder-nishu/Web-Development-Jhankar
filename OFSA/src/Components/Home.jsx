import React from 'react';

const Home = () => {
    return (
        <div className='mb-4'>
            <div className='h-16 justify-center font-semibold flex lg:w-11/12 lg:mx-auto text-center bg-fuchsia-300 items-center'>
                <p className='mx-3 '>
                Get 20% off on your first fix and free chat with our stylist 
                </p>

            </div>
            <div className="hero min-h-96 lg:w-11/12 mx-auto text-white" style={{ backgroundImage: 'url(../../stylist4.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div
                    data-aos="fade-up"
                    data-aos-duration="3000" 
                     className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Your Unique Style With A Personal Stylist</h1>
                        <p className="mb-5">OFSA is the personal styling service for men & women that sends professionally-curated clothing to your door.
                         Evolve your look with the help of our experts!</p>
                        
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-3xl font-semibold text-center my-5  '>Our Best Stylists</h1>
            <div className='flex justify-evenly gap-24 mb-9 lg:flex-row flex-col'>
                <div className='flex flex-col items-center gap-2'>
                    <img data-aos="zoom-in" className='w-72' src="../../best-1.jpeg" alt="" />
                    <button className='btn btn-sm bg-fuchsia-300'> Hire</button>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img data-aos="zoom-in" className='w-72' src="../../best-2.jpeg" alt="" />
                    <button className='btn btn-sm bg-fuchsia-300'> Hire</button>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img data-aos="zoom-in" className='w-72' src="../../best-3.png" alt="" />
                    <button className='btn btn-sm bg-fuchsia-300'> Hire</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;