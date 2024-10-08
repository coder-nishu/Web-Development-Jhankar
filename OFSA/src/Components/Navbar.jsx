import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-xl font-semibold rounded-box w-52">
                            <li ><NavLink to='/about'>About Us</NavLink></li>
                            <li><NavLink to='/list'>Stylist List</NavLink></li>
                            <li><NavLink to='/chat'>Free Chat</NavLink></li>
                            <li><NavLink to='/chat'>Contact us</NavLink></li>

                        </ul>
                    </div>
                 <Link to='/'>   <a className="btn btn-ghost ofsa text-5xl font-bold">OFSA</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-xl font-semibold">
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/list'>Stylist List</NavLink></li>
                        <li><NavLink to='/chat'>Free Chat</NavLink></li>
                        <li><NavLink to='/chat'>Contact us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to='/sign'> <a className="btn mr-2 mx-7 bg-slate-600 ">Sign in</a></Link>
                    <Link to='/register'><a className="btn ">Sign up</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;