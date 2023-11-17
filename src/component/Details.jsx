import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsArr, ProductsBest, ProductsCol, ProductsOffer } from './productsData';
import { useDispatch } from 'react-redux';
import { addToCart } from './rtk/Cart';
import swal from 'sweetalert';

const Details = () => {
    let myid = useParams();
    let product={};
    let arrOfPro = [...ProductsArr,...ProductsBest,...ProductsCol,...ProductsOffer];
    arrOfPro.forEach((ele)=>{
        return ele.id === +myid.id ? product={...ele} : null;
    })
    let dispatch = useDispatch();
    function alertAdd(data){
        swal("Product Add to Cart Successfully!","","success");
        dispatch(addToCart(data));
    }
    return (
        <div className='my-10'>
            <div className='container'>
                <h1 className='font-bold text-3xl text-primeColor font-titleFont mb-3'>Product Details</h1>
                <div className='p-10 px-5 bg-[#F5F5F3]'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className=''>
                            <img src={product.img[`img${product.id}`]} alt="" className='lg:w-96 md:w-[500px] mx-auto'/>
                        </div>
                        <div>
                            <h1 className='text-4xl text-black font-bodyFont font-bold'>{product.title}</h1>
                            <p className='text-lg text-black font-bodyFont font-bold my-3'>${product.price}.00</p>
                            <p className='text-base text-gray-600 font-bodyFont lg:w-[75%]'>{product.description}</p>
                            <p className='text-black text-sm my-3'>Be the first to leave a review.</p>
                            <p className='font-bodyFont text-lg'>Colors: <span className='font-semibold'>
                                {product.color}</span>
                            </p>
                            <div className='mt-7'>
                                <Link onClick={()=>alertAdd(product)}
                                className='p-4 py-3 bg-primeColor text-white font-bodyFont hover:bg-black duration-300'>
                                    Add to Cart
                                </Link>
                            </div>
                            <p className='mt-7 font-bodyFont text-sm'>
                                <span className='text-base font-semibold'>Categories: </span>
                                Spring collection, Streetwear, Women Tags: featured SKU: N/A
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;