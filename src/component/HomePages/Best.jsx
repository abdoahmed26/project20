import React from "react";
import { ProductsBest } from "../productsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faEye,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/Cart";
import { addToFav } from "../rtk/Fovarite";
import swal from 'sweetalert';

const Best = () => {
    let products = ProductsBest;
    let dispatch = useDispatch();
    function alertAdd(data){
        swal("Product Add to Cart Successfully!","","success");
        dispatch(addToCart(data));
    }
    function alertFova(data){
        swal("Product Add to Favourites Successfully!","","success");
        dispatch(addToFav(data));
    }
    return (
        <div className="my-10 py-10 pb-12 bg-[#F5F5F3]">
        <div className="container">
            <h1 className="text-black font-semibold text-3xl mb-6 font-titleFont">
                Our Bestsellers
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((ele) => {
                return (
                    <div className="group shadow bg-white rounded-md" key={ele.id}>
                        <div className="relative overflow-hidden">
                            <img src={ele.img[`img${ele.id}`]} alt="" className="w-full rounded-t-md"/>
                            <div className="bg-white absolute -bottom-full w-full px-2 flex flex-col
                            group-hover:bottom-0 duration-700">
                                <Link
                                onClick={()=>alertAdd(ele)}
                                className="text-textColor font-bodyFont border-b py-1 text-sm
                                hover:text-primeColor hover:border-primeColor duration-300">
                                <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                                    Add to Cart
                                </Link>
                                <Link to={`/details/${ele.id}`}
                                className="text-textColor font-bodyFont border-b py-1 text-sm
                                hover:text-primeColor hover:border-primeColor duration-300">
                                <FontAwesomeIcon icon={faEye} className="me-2" />
                                    View Details
                                </Link>
                                <Link
                                onClick={()=>alertFova(ele)}
                                className="text-textColor font-bodyFont border-b py-1 text-sm
                                hover:text-primeColor hover:border-primeColor duration-300">
                                <FontAwesomeIcon icon={faHeart} className="me-2" />
                                    Add to Wish List
                                </Link>
                            </div>
                        </div>
                        <div className="px-4 py-4 bg-white rounded-b-md">
                            <div className="flex justify-between items-center">
                                <h2 className="text-primeColor font-bold text-lg font-titleFont">
                                {ele.title}
                                </h2>
                                <p className="text-sm text-textColor">${ele.price}.00</p>
                            </div>
                            <p className="text-sm text-textColor font-bodyFont mt-2">
                                {ele.color}
                            </p>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
        </div>
    );
};

export default Best;
