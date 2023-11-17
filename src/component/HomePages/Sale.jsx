import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import back1 from '../images/main-banner-1.jpg';
import back2 from '../images/main-banner.jpg';
import back3 from '../images/catbanner-01.jpg';
import back4 from '../images/catbanner-02.jpg';
import back5 from '../images/catbanner-03.jpg';
import back6 from '../images/catbanner-04.jpg';
import { Link } from 'react-router-dom';

const Sale = () => {
    return (
        <div className='py-10'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <OwlCarousel className='owl-theme' autoplaySpeed={1000} autoplay autoplayTimeout={2000}
                    loop margin={10} nav items={1}>
                        <div className='px-8 flex items-center rounded h-80 bg-cover' 
                        style={{backgroundImage:`url(${back1})`}}>
                            <div className="">
                                <p className='text-red-500 uppercase font-bodyFont'>supercharged for pros.</p>
                                <h1 className='text-primeColor font-titleFont font-semibold text-4xl my-3'>
                                    iPad S13+ Pro.
                                </h1>
                                <p className='text-primeColor font-bodyFont'>From $999.00 or $41.62/mo.</p>
                                <p className='text-primeColor font-bodyFont'>from 24 mo. Footnote</p>
                                <div className='my-7'>
                                    <Link to={"/shop"}
                                    className=' bg-slate-900 p-5 py-2 rounded-full text-white uppercase'>
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='px-8 flex items-center rounded h-80 bg-cover' 
                        style={{backgroundImage:`url(${back2})`}}>
                            <div className="">
                                <p className='text-red-500 uppercase font-bodyFont'>supercharged for pros.</p>
                                <h1 className='text-primeColor font-titleFont font-semibold text-4xl my-3'>
                                    Special Sale
                                </h1>
                                <p className='text-primeColor font-bodyFont'>From $999.00 or $41.62/mo.</p>
                                <p className='text-primeColor font-bodyFont'>from 24 mo. Footnote</p>
                                <div className='my-7'>
                                    <Link to={"/shop"}
                                    className=' bg-slate-900 p-5 py-2 rounded-full text-white uppercase'>
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className='flex flex-col gap-2'>
                            <div className='w-full h-1/2 py-6 rounded flex items-center bg-cover ps-5' 
                            style={{backgroundImage:`url(${back3})`}}>
                                <div>
                                    <p className='text-red-500 uppercase font-bodyFont'>best sale</p>
                                    <h1 className='text-primeColor font-titleFont font-semibold text-xl my-1'>
                                        Laptops Max
                                    </h1>
                                    <p className='text-primeColor font-bodyFont'>From $999.00 or</p>
                                    <p className='text-primeColor font-bodyFont'>$41.62/mo.</p>
                                </div>
                            </div>
                            <div className='w-full h-1/2 py-6 rounded flex items-center bg-cover ps-5' 
                            style={{backgroundImage:`url(${back4})`}}>
                                <div>
                                    <p className='text-red-500 uppercase font-bodyFont'>15% off</p>
                                    <h1 className='text-primeColor font-titleFont font-semibold text-xl my-1'>
                                        Smartwatch 7
                                    </h1>
                                    <p className='text-primeColor font-bodyFont'>Shop the latest band</p>
                                    <p className='text-primeColor font-bodyFont'>styles and colors.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='w-full h-1/2 py-6 rounded flex items-center bg-cover ps-5' 
                            style={{backgroundImage:`url(${back5})`}}>
                                <div>
                                    <p className='text-red-500 uppercase font-bodyFont'>new arrival</p>
                                    <h1 className='text-primeColor font-titleFont font-semibold text-xl my-1'>
                                        Buy IPad Air
                                    </h1>
                                    <p className='text-primeColor font-bodyFont'>From $599 or</p>
                                    <p className='text-primeColor font-bodyFont'>$49.91/mo. for 12/mo.</p>
                                </div>
                            </div>
                            <div className='w-full h-1/2 py-6 rounded flex items-center bg-cover ps-5' 
                            style={{backgroundImage:`url(${back6})`}}>
                                <div>
                                    <p className='text-red-500 uppercase font-bodyFont'>free engraving</p>
                                    <h1 className='text-primeColor font-titleFont font-semibold text-xl my-1'>
                                        AirPods Max
                                    </h1>
                                    <p className='text-primeColor font-bodyFont'>High-fidrlity playback &</p>
                                    <p className='text-primeColor font-bodyFont'>ultra-low distortion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sale;