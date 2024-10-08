import React from 'react';

const List = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Our Top Rated Stylists</h1>
            <div className='flex justify-center gap-24 mb-9 lg:flex-row flex-col'>
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
            <h1 className='text-3xl font-bold text-center my-5'>More Stylists</h1>
            <div>
                <div className='flex flex-wrap  justify-evenly gap-5'>
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card w-96 glass">
                        <figure className='h-40'><img className=' ' src="../../stylist1.webp" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Warner Bros</h2>
                            <p>Get your hollywood look now</p>
                           <div className='flex items-center'>
                           <div className='rating'>
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            </div>
                            <p className='text-lg'>4.9</p>
                            
                           </div>
                           <p className='text-xl font-semibold'>From ৳100</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-fuchsia-300">Learn now!</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card w-96 glass">
                        <figure className='h-40'><img className=' ' src="../../stylist4.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cowboy</h2>
                            <p>Don't know what to wear? Contact me now</p>
                           <div className='flex items-center'>
                           <div className='rating'>
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            </div>
                            <p className='text-lg'>4.9</p>
                           
                           </div>
                           <p className='text-xl font-semibold'>From ৳200</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-fuchsia-300">Hire</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card w-96 glass">
                        <figure className='h-40'><img className=' ' src="../../stylist2.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Emily</h2>
                            <p>You will never look at your heir the same way again.</p>
                           <div className='flex items-center'>
                           <div className='rating'>
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            </div>
                            <p className='text-lg'>4.5</p>
                         
                           </div>
                           <p className='text-xl font-semibold'>From ৳150</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-fuchsia-300">Hire</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card w-96 glass">
                        <figure className='h-40'><img className=' ' src="../../stylist3.avif" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Snow white</h2>
                            <p>Look like a princes and get your dream prince</p>
                           <div className='flex items-center'>
                           <div className='rating'>
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            </div>
                            <p className='text-lg'>4.8</p>
                           
                           </div>
                           <p className='text-xl font-semibold'>From ৳300</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-fuchsia-300">Hire</button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card w-96 glass">
                        <figure className='h-40'><img className=' ' src="../../stylist5.png" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">The Rainbow</h2>
                            <p>I will create you a personal color pallet</p>
                           <div className='flex items-center'>
                           <div className='rating'>
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            </div>
                            <p className='text-lg'>4.2</p>
                            
                           </div>
                           <p className='text-xl font-semibold'>From ৳200</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-fuchsia-300">Hire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;