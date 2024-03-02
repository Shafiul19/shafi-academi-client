import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/coding.jpg';
import { FaUserAlt } from "react-icons/fa";


const NavBar = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div className="navbar bg-orange-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link>Courses</Link>
                        </li>

                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img className='h-6' src={logo} alt="" />
                    <span className='text-white font-semibold'>Shafi Academi</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link  className='text-white font-semibold'>Courses</Link>
                    </li>

                    <li>
                        <Link  className='text-white font-semibold'>FAQ</Link>
                    </li>
                    <li>
                        <Link  className='text-white font-semibold'>Blog</Link>
                    </li>
                </ul>
            </div>
                <div className="form-control lg:mx-3">
            
                    <label className="label cursor-pointer">
                        <span className="label-text text-xs text-white font-semibold mr-0 lg:mx-1 lg:min-w-[31px]">{checked ? "Dark" : "Light"}</span>
                        <input onChange={() => setChecked(!checked)} type="checkbox" className="toggle toggle-xs lg:toggle-sm ml-1 mr-4" checked={checked} />
                    </label>
            </div>
            <div className="navbar-end">
               <FaUserAlt className="ml-2 mr-1 md:mx-4 text-white" />
            </div>
        </div>
    );
};

export default NavBar;