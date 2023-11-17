import { faCartShopping, faEye, faGrip, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductsArr, ProductsBest, ProductsCol, ProductsOffer } from './productsData';
import { addToCart } from './rtk/Cart';
import { addToFav } from './rtk/Fovarite';
import swal from 'sweetalert';

const Shop2 = () => {
    let [text,setText] = useState("white");
    let [text2,setText2] = useState("#6D6D6D");
    let [back,setBack] = useState("#262626");
    let [back2,setBack2] = useState("white");
    let [link,setLink] = useState("white");
    let [link2,setLink2] = useState("black");
    let [backLink1,setBackLink1] = useState("black");
    let [backLink2,setBackLink2] = useState("white");
    let arr1 = [...ProductsArr,...ProductsBest];
    let arr2 = [...ProductsOffer,...ProductsCol];
    let [arrOfPro,setArr] = useState(arr1);
    let dispatch = useDispatch();
    let [first,setFirst] = useState(1);
    let [second,setSecond] = useState(arrOfPro.length);
    function alertAdd(data){
        swal("Product Add to Cart Successfully!","","success");
        dispatch(addToCart(data));
    }
    function alertFova(data){
        swal("Product Add to Favourites Successfully!","","success");
        dispatch(addToFav(data));
    }
    return (
        <div>
            <div className='flex flex-col justify-start gap-3 sm:flex-row sm:justify-between items-center w-full'>
                <div className='w-full sm:w-fit'>
                    <div className='flex items-center gap-3'>
                        <span>
                            <span className='text-xl p-2 py-[3px] pt-[0px] border cursor-pointer'
                            style={{backgroundColor:back,color:text}}
                            onClick={()=>{setBack2("white");setText2("#6D6D6D");setText("white");setBack("#262626")}}>
                                <FontAwesomeIcon icon={faGrip} />
                            </span>
                        </span>
                        <span className='text-xl p-2 py-[2px] pt-0 border cursor-pointer'
                        style={{backgroundColor:back2,color:text2}}
                        onClick={()=>{setBack("white");setText("#6D6D6D");setText2("white");setBack2("#262626")}}>
                            <FontAwesomeIcon icon={faList} />
                        </span>
                    </div>
                </div>
                <div className='w-full flex sm:justify-end'>
                    <form action="" method="post" className='flex items-center gap-5'>
                        <div>
                            <label htmlFor='sort' className='text-textColor font-bodyFont me-2'>Sort by:</label>
                            <select name="sort" id="sort" className='border w-44 p-1 outline-none'>
                                <option value="best">Best Sellers</option>
                                <option value="new">New Arrival</option>
                                <option value="feat">Featured</option>
                                <option value="final">Final Offer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='sort' className='text-textColor font-bodyFont me-2'>Show:</label>
                            <select name="sort" id="sort" className='border w-20 p-1 outline-none'>
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="48">48</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                arrOfPro.map((ele)=>{
                                    return (
                                        <div className='group shadow bg-white rounded-md' key={ele.id}>
                                            <div className='relative overflow-hidden'>
                                                <img src={ele.img[`img${ele.id}`]} alt="" className='w-full rounded-t-md
                                                relative'/>
                                                <div className='bg-white absolute -bottom-full w-full px-2 flex flex-col
                                                group-hover:bottom-0 duration-700'>
                                                    <Link onClick={()=>{alertAdd(ele)}}
                                                    className='text-textColor font-bodyFont border-b py-1 text-sm
                                                    hover:text-primeColor hover:border-primeColor duration-300'>
                                                        <FontAwesomeIcon icon={faCartShopping} className='me-2'/>
                                                        Add to Cart
                                                    </Link>
                                                    <Link to={`/details/${ele.id}`}
                                                    className='text-textColor font-bodyFont border-b py-1 text-sm
                                                    hover:text-primeColor hover:border-primeColor duration-300'>
                                                        <FontAwesomeIcon icon={faEye} className='me-2'/>
                                                        View Details
                                                    </Link>
                                                    <Link onClick={()=>alertFova(ele)}
                                                    className='text-textColor font-bodyFont border-b py-1 text-sm
                                                    hover:text-primeColor hover:border-primeColor duration-300'>
                                                        <FontAwesomeIcon icon={faHeart} className='me-2'/>
                                                        Add to Wish List
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='px-4 py-4 bg-white rounded-b-md'>
                                                <div className='flex justify-between items-center'>
                                                    <h2 className='text-primeColor font-bold text-lg font-titleFont'>
                                                        {ele.title}
                                                    </h2>
                                                    <p className='text-sm text-textColor'>${ele.price}.00</p>
                                                </div>
                                                <p className='text-sm text-textColor font-bodyFont mt-2'>{ele.color}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div className='flex gap-4'>
                        <Link onClick={()=>{setArr([...arr1]);setBackLink2("white");setLink2("black");setLink("white");
                        setBackLink1("black");setFirst(1);setSecond(arrOfPro.length)}}
                        className='p-[2px] px-[14px] border font-bold text-lg font-titleFont'
                        style={{backgroundColor:backLink1,color:link}}>
                            1
                        </Link>
                        <Link onClick={()=>{setArr([...arr2]);setBackLink1("white");setLink("black");setLink2("white");
                        setBackLink2("black");setFirst(arrOfPro.length);setSecond(arrOfPro.length*2)}}
                        className='p-[2px] px-3 border font-bold text-lg font-titleFont'
                        style={{backgroundColor:backLink2,color:link2}}>
                            2
                        </Link>
                    </div>
                    <div className='text-lightText font-bodyFont'>
                        Products from {first} to {second} of {arrOfPro.length*2}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop2;