import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
    return (
        <div className='my-10 mt-8'>
            <div className="container">
                <h1 className='font-bold text-4xl text-primeColor font-titleFont mb-3'>Journals</h1>
                <div>
                    <p className='text-textColor md:w-[80%] lg:w-1/2'>
                        <span className='text-primeColor font-semibold font-titleFont text-lg'>Orebi </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis delectus vitae, aliquid sit 
                        iure dolorum commodi eum numquam voluptate!
                    </p>
                    <div className='mt-5'>
                        <Link to={"/shop"}
                        className='px-5 py-2 bg-primeColor text-white font-bodyFont
                        rounded font-bold hover:bg-black duration-300'>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Journal;