import React from 'react';

const About = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
            <figure><img
            data-aos="flip-up"
            data-aos-duration="2000" 
             src="../../about.png" alt="Album" /></figure>
                <div
                data-aos="flip-down"
                data-aos-duration="2000" 
                 className="card-body lg:w-1/2 lg:my-auto ">
                
                    <h2 className="card-title ">OFSA</h2>
                    <div className=''>
                    <p className='font-semibold text-base'>OFSA is completely based on current fashion trend and styling.These days getting a product is lot more easily than styling it and presenting to the outer world in trendy way so, our website brings all such conditions under one roof and brings the best out of people. This will be a huge benefit to all the busy personalities out there in their styling.
                     This system comprises of chat box so that users can chat with Stylist so that user can describe exact requirements of the attire the user need .

                     
                     
                     </p>
                     <p className='font-semibold text-base mt-4'>You can hire stylist for an hour or for one day and also can chat with them . </p>
                    </div>
                    
                </div>
            </div>
            <h1 className='font-bold text-2xl text-center my-4'>Our Customer Review</h1>
            <div className='lg:flex mt-5 justify-around mb-5'>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/h1SkYqB/member1.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Matt</h2>
                    <p>I am too poor to hire</p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/12ZKQXS/member2.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jenny</h2>
                    <p>I hired a fashion stylist for a party. It's great </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/vd679Xr/member3.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Joshim</h2>
                    <p> There Behave is very polite. </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/YcJqKkk/member4.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jorina</h2>
                    <p> I didn't Like their service</p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;