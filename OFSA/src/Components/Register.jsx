import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-transparent' >

            <div className="hero min-h-screen  " style={{ backgroundImage: 'url(../../register.jpeg)' }}>

                <div className="hero-content lg:w-[28rem] bg-[#1818178E] flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-3xl shadow-2xl ">
                        <h1 className='text-center text-3xl text-black font-semibold mt-2'>Create New Account </h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-white">Full Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-white">Phone Number</span>
                                </label>
                                <input type="Number" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-fuchsia-200">Continue</button>
                            </div>
                            <hr />
                            <h1 className='text-center font-semibold'>Or</h1>
                            <hr />
                            <div className='flex items-center gap-5 w-72  mx-auto bg-slate-300 p-2  rounded-lg'>
                                <img className='w-6 rounded-full  ' src="https://i.ibb.co/DkW07NG/google-logo-icon-134448.png" alt="" />
                                <p className='text-lg '>login with Google</p>
                            </div>
                            <div className='flex items-center mx-auto w-72  gap-5 bg-slate-300 p-2 rounded-lg'>
                                <img className='w-6 rounded-full' src="https://i.ibb.co/WFCXFr1/facebook-icon-512x512-seb542ju.png" alt="" />
                                <p className='text-lg  '>login with facebook</p>
                            </div>
                            <div className='text-center text-black'>
                                Already have an account? <Link className='text-blue-900' to={'/sign'}>Sign in...</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;