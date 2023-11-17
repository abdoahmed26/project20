import { faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Shop2 from './Shop2';

const Shop = () => {
    let [ulColor,setColor] = useState("block");
    let [ulBrand,setBrand] = useState("block");
    return (
        <div className='my-10'>
            <div className="container">
                <h1 className='font-bold text-4xl text-primeColor font-titleFont'>Products</h1>
                <div className='my-10 flex items-start gap-10'>
                    <div className='hidden md:block md:w-[25%]'>
                        <div>
                            <h2 className='text-primeColor lg:text-xl md:text-base font-bodyFont font-bold mb-1'>
                                Shop by Category
                            </h2>
                            <ul className='divide-y border-b md:text-sm lg:text-base'>
                                <li className='py-2 flex justify-between text-lightText font-bodyFont'>
                                    <span>New Arrivals</span>
                                    <span className='cursor-pointer hover:text-primeColor duration-300'>
                                        <FontAwesomeIcon icon={faPlus} className='md:text-xs lg:text-base'/>
                                    </span>
                                </li>
                                <li className='py-2 flex justify-between text-lightText font-bodyFont'>
                                    <span>Gudgets</span>
                                </li>
                                <li className='py-2 flex justify-between text-lightText font-bodyFont'>
                                    <span>Accessories</span>
                                    <span className='cursor-pointer hover:text-primeColor duration-300'>
                                        <FontAwesomeIcon icon={faPlus} className='md:text-xs lg:text-base'/>
                                    </span>
                                </li>
                                <li className='py-2 flex justify-between text-lightText font-bodyFont'>
                                    <span>Electronics</span>
                                </li>
                                <li className='py-2 flex justify-between text-lightText font-bodyFont'>
                                    <span>Others</span>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-primeColor lg:text-xl md:text-base font-bodyFont font-bold mb-1 flex 
                            justify-between
                            items-center cursor-pointer' onClick={()=>ulColor==="block"?setColor("none"):setColor("block")}>
                                <span>Shop by Color</span>
                                <span>
                                    <FontAwesomeIcon icon={faSortDown} />
                                </span>
                            </h2>
                            <ul className='divide-y border-b md:text-sm lg:text-base' style={{display:ulColor}}>
                                <li className='py-2 flex items-center gap-2 text-lightText font-bodyFont'>
                                    <span className='w-3 h-3 rounded-full bg-green-500'></span>
                                    <span>Green</span>
                                </li>
                                <li className='py-2 flex items-center gap-2 text-lightText font-bodyFont'>
                                    <span className='w-3 h-3 rounded-full bg-gray-500'></span>
                                    <span>Gray</span>
                                </li>
                                <li className='py-2 flex items-center gap-2 text-lightText font-bodyFont'>
                                    <span className='w-3 h-3 rounded-full bg-red-500'></span>
                                    <span>Red</span>
                                </li>
                                <li className='py-2 flex items-center gap-2 text-lightText font-bodyFont'>
                                    <span className='w-3 h-3 rounded-full bg-yellow-500'></span>
                                    <span>Yellow</span>
                                </li>
                                <li className='py-2 flex items-center gap-2 text-lightText font-bodyFont'>
                                    <span className='w-3 h-3 rounded-full bg-blue-500'></span>
                                    <span>Blue</span>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-primeColor lg:text-xl md:text-base font-bodyFont font-bold mb-1 flex 
                            justify-between
                            items-center cursor-pointer' onClick={()=>ulBrand==="block"?setBrand("none"):setBrand("block")}>
                                <span>Shop by Brand</span>
                                <span>
                                    <FontAwesomeIcon icon={faSortDown} />
                                </span>
                            </h2>
                            <ul className='md:text-sm lg:text-base' style={{display:ulBrand}}>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300'>
                                    <span>Apple</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300'>
                                    <span>Ultron</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300'>
                                    <span>Unknown</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300'>
                                    <span>Shoppers Home</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300'>
                                    <span>Hoichoi</span>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-primeColor lg:text-xl md:text-base font-bodyFont font-bold mb-1 
                            cursor-pointer'>
                                <span>Shop by Price</span>
                            </h2>
                            <ul className='md:text-sm lg:text-base'>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300 cursor-pointer'>
                                    <span>$0.00 - $49.99</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300 cursor-pointer'>
                                    <span>$50.00 - $99.99</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300 cursor-pointer'>
                                    <span>$100.00 - $199.99</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300 cursor-pointer'>
                                    <span>$200.00 - $399.99</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300 cursor-pointer'>
                                    <span>$400.00 - $599.99</span>
                                </li>
                                <li className='py-2 text-lightText font-bodyFont border-b hover:text-primeColor
                                hover:border-b-primeColor duration-300 cursor-pointer'>
                                    <span>$600.00 - $1000.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full'><Shop2/></div>
                </div>
            </div>
        </div>
    );
}

export default Shop;