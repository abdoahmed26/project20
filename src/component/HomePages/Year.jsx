import React from 'react';
import back from '../images/clockback.webp';
import { Link } from 'react-router-dom';

const Year = () => {
    return (
        <div className='my-10 py-16 pb-20 bg-cover' style={{backgroundImage:`url(${back})`}}>
            <div className="container">
                <div className='w-full flex lg:justify-end md:justify-start'>
                    <div className='w-full md:w-[75%] lg:w-1/2'>
                        <h1 className='text-primeColor font-semibold text-3xl font-titleFont'>Product of The year</h1>
                        <p className='my-5 text-primeColor font-titleFont'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                            cupiditate modi amet! Facilis, aperiam quaerat.
                        </p>
                        <div className='mt-8'>
                            <Link to={"/shop"}
                            className='font-titleFont text-white bg-primeColor py-2 px-4 font-semibold
                            hover:bg-black duration-300'>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Year;