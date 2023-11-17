import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Footer = () => {
    const {register,formState: { errors },handleSubmit,} = useForm();
    const onSubmit = (data) => {
        console.log(data)
        document.querySelector(".form").innerHTML="Subscribed Successfully !"
    };
    return (
        <div>
            <div className='mt-10 py-10 pb-12 bg-[#F5F5F3]'>
                <div className="container">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <div>
                            <h1 className='text-black font-bold text-xl font-bodyFont'>
                                More about Orebi Shop
                            </h1>
                            <p className='my-5 text-black font-bodyFont'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam,
                                numquam nesciunt in.
                            </p>
                            <div className='flex gap-2'>
                                <Link to="https://www.youtube.com/@AbdoAhmed-tt5go" target='_blank'
                                className='text-white bg-primeColor p-[7px] py-1 rounded-full hover:bg-black'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                                <Link to="https://github.com/abdoahmed26" target='_blank'
                                className='text-white bg-primeColor p-[8px] py-1 rounded-full hover:bg-black'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </Link>
                                <Link to="https://www.facebook.com/profile.php?id=100029822832042&mibextid=ZbWKwL" 
                                target='_blank'
                                className='text-white bg-primeColor p-[8px] py-1 rounded-full hover:bg-black'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                                <Link to="https://www.linkedin.com/in/abdo-ahmed-67185a28a" target='_blank'
                                className='text-white bg-primeColor p-[9px] py-1 rounded-full hover:bg-black'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </div>
                        <div className='flex md:justify-center'>
                            <div>
                                <h1 className='text-black font-bold text-xl font-bodyFont mb-5'>
                                    Shop
                                </h1>
                                <ul className='flex flex-col gap-2'>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Accesories
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Clothes
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Electronics
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Home appliances
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        New Arrivals
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className='flex md:justify-center'>
                            <div>
                                <h1 className='text-black font-bold text-xl font-bodyFont mb-5'>
                                    Your account
                                </h1>
                                <ul className='flex flex-col gap-2'>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Profile
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Orders
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Addresses
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Account Details
                                    </Link>
                                    <Link className='hover:text-primeColor text-lightText duration-300 text-base
                                    hover:underline w-fit font-titleFont'>
                                        Payment Options
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-black font-bold text-xl font-bodyFont'>
                                Subscribe
                            </h1>
                            <p className='my-5 mb-3 text-black font-bodyFont'>
                                A at pellentesque et mattis porta enim elementum.
                            </p>
                            <form action="" method='post'
                            className='text-center flex flex-col gap-2 form text-green-600 font-titleFont font-semibold'
                            onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" {...register("email",{required:"Please provide an Email !"})} 
                                name="email" placeholder='Enter your email' 
                                className=' bg-inherit
                                outline-none p-1 border-b border-b-lightText placeholder:font-bodyFont'/>
                                {errors.email?.type==="required"&&(
                                    <p className='text-red-600 text-sm animate-bounce'>{errors.email.message}</p>
                                )}
                                <input type="submit" value="Subscribe" className='font-bodyFont text-lightText
                                py-2 px-1 bg-white cursor-pointer hover:text-white hover:bg-black duration-300'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F5F3] text-sm text-lightText text-center py-4 font-bodyFont border-t'>
                &copy; Copyright 2022 | Orebi shopping | All Rights Reserved | Powered by Abdo
            </div>
        </div>
    );
}

export default Footer;