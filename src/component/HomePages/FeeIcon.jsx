import React from 'react';
import img1 from '../images/service.png';
import img2 from '../images/service-02.png';
import img3 from '../images/service-03.png';
import img4 from '../images/service-04.png';
import img5 from '../images/service-05.png';

const FeeIcon = () => {
    return (
        <div className='py-8 bg-[#F5F5F3]'>
            <div className="container flex justify-center sm:justify-start">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className='flex md:justify-center items-center gap-4'>
                        <img src={img1} alt=""/>
                        <div>
                            <h1 className='font-bold font-titleFont text-sm'>Free Shopping</h1>
                            <p className='text-xs font-bodyFont text-slate-700'>From all orders over $100</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center items-center gap-4'>
                        <img src={img2} alt=""/>
                        <div>
                            <h1 className='font-bold font-titleFont text-sm'>Daily Surprise Offers</h1>
                            <p className='text-xs font-bodyFont text-slate-700'>Save up to 25% off</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center items-center gap-4'>
                        <img src={img3} alt=""/>
                        <div>
                            <h1 className='font-bold font-titleFont text-sm'>Support 24/7</h1>
                            <p className='text-xs font-bodyFont text-slate-700'>Shop with an expert</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center items-center gap-4'>
                        <img src={img4} alt=""/>
                        <div>
                            <h1 className='font-bold font-titleFont text-sm'>Affordable Prices</h1>
                            <p className='text-xs font-bodyFont text-slate-700'>Get Factory direct price</p>
                        </div>
                    </div>
                    <div className='flex md:justify-center items-center gap-4'>
                        <img src={img5} alt=""/>
                        <div>
                            <h1 className='font-bold font-titleFont text-sm'>Secure Payments</h1>
                            <p className='text-xs font-bodyFont text-slate-700'>100% Protected Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeeIcon;