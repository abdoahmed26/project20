import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAll, deleteFroCart, getProducts, minusCount, plusCount } from './rtk/Cart';
import empty from './images/emptyCart.png';
import Swal from 'sweetalert2'

const Cart = () => {
    let cart = useSelector(state=>state.myCart);
    let dispatch = useDispatch();
    if(window.localStorage.getItem("product")){
        dispatch(getProducts(JSON.parse(window.localStorage.getItem("product"))));
    }
    let total = 0;
    cart.map((ele)=>total+=ele.price*ele.count);
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
                dispatch(deleteFroCart(ele))
            }
        });
    }
    function alerDeleِAll(){
        Swal.fire({
            title: "Are you want delete all products?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "All Products deleted!",
                    icon: "success"
                });
                dispatch(deleteAll())
            }
        });
    }
    return (
        <div className='my-10 mt-8'>
            <div className="container">
                <h1 className='font-bold text-4xl text-primeColor font-titleFont mb-3'>Cart</h1>
                <div>
                    {
                        cart.length > 0 ?
                            <div className='mt-4'>
                                <div className='overflow-y-auto scr'>
                                    <table className='border-collapse border w-[590px] sm:w-full'>
                                        <thead>
                                            <tr>
                                                <th className='border'>#</th>
                                                <th className='border'>Img</th>
                                                <th className='border'>Name</th>
                                                <th className='border'>Price</th>
                                                <th className='border'>Quantity</th>
                                                <th className='border'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map((ele,index)=>{
                                                    return (
                                                        <tr className='text-center font-bodyFont font-bold 
                                                        odd:bg-backColor even:bg-white' 
                                                        key={ele.id}>
                                                            <td className='border px-1'>{index+1}</td>
                                                            <td className='border p-1'>
                                                                <img src={ele.img[`img${ele.id}`]} alt="" 
                                                                className='w-16 h-16 mx-auto'/>
                                                            </td>
                                                            <td className='border'>{ele.title}</td>
                                                            <td className='border'>${ele.price}.00</td>
                                                            <td className='border'>
                                                                <div className='lg:w-[50%] flex justify-between w-[75%] 
                                                                mx-auto'>
                                                                    <span onClick={()=>dispatch(minusCount(ele))}
                                                                    className='p-2 py-0 bg-gray-100 border border-gray-300 
                                                                    text-lg me-2 cursor-pointer'>
                                                                        -
                                                                    </span>
                                                                    <span className='text-lg'>{ele.count}</span>
                                                                    <span onClick={()=>dispatch(plusCount(ele))}
                                                                    className='p-2 py-0 bg-gray-100 border border-gray-300 
                                                                    text-lg ms-2 cursor-pointer'>
                                                                        +
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className='border'>
                                                                <Link onClick={()=>alerDele(ele)}
                                                                className='bg-red-500 text-white p-2 rounded'>
                                                                    Delete
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className='mt-6'>
                                    <Link onClick={()=>alerDeleِAll()}
                                    className='bg-red-500 text-white p-2 px-4 rounded uppercase font-bodyFont font-bold'>
                                        reset cart
                                    </Link>
                                </div>
                                <div className='mt-8'>
                                    <div className='max-w-[400px]'>
                                        <h2 className='text-black font-bodyFont font-bold text-2xl mb-3'>
                                            Cart totals
                                        </h2>
                                        <div className=' divide-y divide-gray-400 border border-gray-400'>
                                            <div className='flex justify-between font-bodyFont p-3 py-1'>
                                                <p className='font-semibold text-lg'>Subtotal</p>
                                                <p className='font-semibold text-lg'>${total}</p>
                                            </div>
                                            <div className='flex justify-between font-bodyFont p-3 py-1'>
                                                <p className='font-semibold text-lg'>Shipping Charge</p>
                                                <p className='font-semibold text-lg'>$30</p>
                                            </div>
                                            <div className='flex justify-between font-bodyFont p-3 py-1'>
                                                <p className='font-semibold text-lg'>Total</p>
                                                <p className='font-bold text-lg'>${total+30}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        :<div className='my-5'>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                                <div>
                                    <img src={empty} alt="" className='md:w-[550px] lg:w-auto'/>
                                </div>
                                <div className="max-w-[500px] p-4 py-8 bg-white flex gap-2 flex-col items-center rounded-md 
                                shadow-lg">
                                    <h2 className='text-black font-titleFont font-bold text-xl'>
                                        YOUR CART FEELS LONELY.
                                    </h2>
                                    <p className='text-center text-sm font-bodyFont sm:px-10'>
                                        Your Shopping cart lives to serve. Give it purpose - fill it with books, 
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

export default Cart;