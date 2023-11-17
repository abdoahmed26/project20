import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from './images/emptyCart.png';
import Swal from 'sweetalert2'
import { deleteAllFav, deleteFroFav, getFavo } from './rtk/Fovarite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Favorite = () => {
    let favo = useSelector(state=>state.myFov);
    let dispatch = useDispatch();
    if(window.localStorage.getItem("fovaurite")){
        dispatch(getFavo(JSON.parse(window.localStorage.getItem("fovaurite"))));
    }
    function alerDele(ele){
        Swal.fire({
            title: "Are you want delete product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Product deleted!",
                    icon: "success"
                });
                dispatch(deleteFroFav(ele))
            }
        });
    }
    function alerDeleِAll(){
        Swal.fire({
            title: "Are you want delete all Favorites?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "All Favorites deleted!",
                    icon: "success"
                });
                dispatch(deleteAllFav())
            }
        });
    }
    return (
        <div className='my-10 mt-8'>
            <div className="container">
                <h1 className='font-bold text-4xl text-primeColor font-titleFont mb-3'>Favourites</h1>
                <div>
                    {
                        favo.length > 0 ?
                            <div className='mt-4'>
                                <div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                                        {
                                            favo.map((ele)=>{
                                                return (
                                                    <div className='shadow bg-white rounded-md relative' key={ele.id}>
                                                        <div className='relative overflow-hidden'>
                                                            <img src={ele.img[`img${ele.id}`]} alt="" className='w-full 
                                                            rounded-t-md'/>
                                                        </div>
                                                        <div className='px-4 py-4 bg-white rounded-b-md'>
                                                            <div className='flex justify-between items-center'>
                                                                <h2 className='text-primeColor font-bold text-lg 
                                                                font-titleFont'>
                                                                    {ele.title}
                                                                </h2>
                                                                <p className='text-sm text-textColor'>${ele.price}.00</p>
                                                            </div>
                                                            <p className='text-sm text-textColor font-bodyFont mt-2'>
                                                                {ele.color}
                                                            </p>
                                                        </div>
                                                        <FontAwesomeIcon icon={faXmark} onClick={()=>alerDele(ele)}
                                                        className=' absolute right-2 top-2 z-30 text-lg cursor-pointer'/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <Link onClick={()=>alerDeleِAll()}
                                    className='bg-red-500 text-white p-2 px-4 rounded uppercase font-bodyFont font-bold'>
                                        Delete All
                                    </Link>
                                </div>
                            </div>
                        :<div className='my-5'>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                                <div>
                                    <img src={empty} alt="" className='md:w-[550px] lg:w-auto'/>
                                </div>
                                <div className="max-w-[500px] p-4 py-8 bg-white flex gap-2 flex-col items-center rounded-md 
                                shadow-lg">
                                    <h2 className='text-black font-titleFont font-bold text-xl uppercase'>
                                        YOUR Favorites list FEELS LONELY.
                                    </h2>
                                    <p className='text-center text-sm font-bodyFont sm:px-10'>
                                        Your Favorites list lives to serve. Give it purpose - fill it with books, 
                                        electronics, videos, etc. and make it happy.
                                    </p>
                                    <div className='mt-3'>
                                        <Link to={"/shop"}
                                        className='px-5 py-2 bg-primeColor text-white font-bodyFont
                                        rounded font-bold hover:bg-black duration-300'>
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Favorite;