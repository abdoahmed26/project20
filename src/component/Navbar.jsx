import React, { useState } from 'react';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered , faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    let [left,setLeft] = useState("-100%");
    return (
        <div className='fixed top-0 w-full mb-5 z-50 bg-white'>
            <nav className='py-4 border-b border-b-gray-300'>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src={logo} alt="" className='w-[80px]'/>
                        </div>
                        <div className='text-titleColor text-2xl md:hidden'>
                            <Link onClick={()=> setLeft("0%")}>
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            </Link>
                        </div>
                        <ul className='font-bodyFont text-titleColor list-none hidden md:flex gap-5'>
                            <li className='pe-5 border-r-2 border-r-gray-300'>
                                <Link to={"/home"}
                                className='text-primeColor font-bold border-b border-b-primeColor link hover:font-bold 
                                hover:border-b-primeColor'>
                                    Home
                                </Link>
                            </li>
                            <li className='pe-5 border-r-2 border-r-gray-300'>
                                <Link to={"/shop"}
                                className='hover:text-primeColor text-textColor border-b duration-300 hover:font-bold
                                border-b-white hover:border-b-primeColor link'>
                                    Shop
                                </Link>
                            </li>
                            <li className='pe-5 border-r-2 border-r-gray-300'>
                                <Link to={"/about"}
                                className='hover:text-primeColor border-b text-textColor duration-300 
                                hover:font-bold border-b-white hover:border-b-primeColor link'>
                                    About
                                </Link>
                            </li>
                            <li className='pe-5 border-r-2 border-r-gray-300'>
                                <Link to={"/contact"}
                                className='hover:text-primeColor border-b text-textColor duration-300 
                                hover:font-bold border-b-white hover:border-b-primeColor link'>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to={"/journal"}
                                className='hover:text-primeColor border-b text-textColor duration-300 
                                hover:font-bold border-b-white hover:border-b-primeColor link'>
                                    Journal
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='bg-[#000000a3] top-0 fixed w-full h-full duration-300' style={{left:left}}>
                <div className="p-6 pt-10 w-[80%] bg-primeColor h-full relative">
                    <FontAwesomeIcon icon={faXmark} className="text-gray-200 text-2xl p-[3px] px-[6px] 
                    border border-gray-200 cursor-pointer absolute top-2 -right-10 hover:text-red-500
                    hover:border-red-500 duration-300" onClick={()=>setLeft("-100%")}/>
                    <div>
                        <img src={logo2} alt="" className='w-[100px]'/>
                    </div>
                    <div>
                        <ul className="bg-primeColor duration-300 list text-lg mt-5
                        font-bodyFont text-titleColor list-none flex flex-col gap-4">
                            <Link to={"/home"}
                            className='text-gray-200 hover:text-white hover:font-bold pt-2 hover:underline'>
                                Home
                            </Link>
                            <Link to={"/shop"}
                            className='text-gray-200 hover:text-white hover:font-bold pt-2 hover:underline'>
                                Shop
                            </Link>
                            <Link className='text-gray-200 hover:text-white hover:font-bold pt-2 hover:underline'>
                                About
                            </Link>
                            <Link className='text-gray-200 hover:text-white hover:font-bold pt-2 hover:underline'>
                                Contact
                            </Link>
                            <Link className='text-gray-200 hover:text-white hover:font-bold pt-2 hover:underline'>
                                Journal
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
