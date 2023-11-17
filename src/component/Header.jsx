import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heart from './images/wish-black.svg';
import { ProductsArr, ProductsBest, ProductsCol, ProductsOffer } from './productsData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './rtk/Cart';
import { getFavo } from './rtk/Fovarite';

const Header = () => {
    let [disPar,setPar] = useState("none");
    let [valInp,setVal] = useState("");
    let arrOfPro = [...ProductsArr,...ProductsBest,...ProductsCol,...ProductsOffer];
    let myCart = useSelector(state=>state.myCart);
    let myFov = useSelector(state=>state.myFov);
    let dispatch = useDispatch();
    let total = 0;
    myCart.map((ele)=>total+=ele.price*ele.count);
    if(window.localStorage.getItem("product")){
        dispatch(getProducts(JSON.parse(window.localStorage.getItem("product"))));
    }
    if(window.localStorage.getItem("fovaurite")){
        dispatch(getFavo(JSON.parse(window.localStorage.getItem("fovaurite"))));
    }
    return (
        <div className='bg-backColor py-5 mt-[55px]'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='text-primeColor font-bold text-2xl flex items-center'>
                        <span>Digitic.</span>
                    </div>
                    <div className='relative'>
                        <form action="" className='w-full bg-white flex justify-between items-center px-3 rounded-md'>
                            <input type="text" placeholder='Search your products here' className='outline-none 
                            w-[90%] h-10 placeholder:font-bodyFont placeholder:text-sm inp' 
                            onInput={(e)=>{setVal(e.target.value); 
                            e.target.value.length > 0 ? setPar("block"):setPar("none")}}/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </form>
                        <div className='bg-white shadow-md shadow-slate-400 w-full h-56 overflow-auto absolute mt-4 z-40
                        scr' style={{display:disPar}}>
                            <ul>
                                {
                                    arrOfPro.map((ele)=>{
                                        return ele.title.toLowerCase().includes(valInp.toLowerCase()) ? 
                                            <li key={ele.id}>
                                                <Link to={`/details/${ele.id}`} onClick={()=>{setPar("none");
                                                document.querySelector(".inp").value=""}}>
                                                    <div className='bg-backColor p-2 mb-2 flex items-center gap-4'>
                                                        <img src={ele.img[`img${ele.id}`]} alt="" className='w-16 h-16'/>
                                                        <div>
                                                            <h1 className='font-titleFont font-semibold'>
                                                                {ele.title}
                                                            </h1>
                                                            <p className='text-xs mb-1'>{ele.description.slice(0,56)}</p>
                                                            <p className='text-sm'>Price: 
                                                                <span className='font-bold text-primeColor ms-[3px]'>
                                                                    ${ele.price.toFixed(2)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>:null
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center lg:justify-end justify-start'>
                        <div className='flex gap-4 flex-wrap'>
                            <Link to={"/favourite"}>
                                <div className='flex items-center gap-0'>
                                    <img src={heart} alt="" className='w-[22px] h-[22px]'/>
                                    <div className='flex flex-col'>
                                        <span className='m-0 mx-auto w-fit bg-white p-[10px] py-[0px] text-primeColor
                                        rounded-full text-xs'>
                                            {myFov.length}
                                        </span>
                                        <span className='text-xs text-primeColor font-bodyFont'>Favourite</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/login"}>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
                                    <div className='flex flex-col'>
                                        <span className='m-0 text-primeColor rounded-full text-xs'>
                                            Log in
                                        </span>
                                        <span className='text-xs text-primeColor font-bodyFont'>My Account</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/cart"}>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faCartShopping} className='w-5 h-5'/>
                                    <div className='flex flex-col'>
                                        <span className='m-0 mx-auto w-fit bg-white p-[10px] py-[0px] text-primeColor
                                        rounded-full text-xs'>
                                            {myCart.length}
                                        </span>
                                        <span className='text-xs text-primeColor font-bodyFont'>${total}.00</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;