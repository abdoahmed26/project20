import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");
    let {register,formState:{ errors },handleSubmit} = useForm();
    let url = useNavigate();
    const Submit = (data) => {
        console.log(data);
        setEmail("");
        setPass("");
        url("/home");
    }
    return (
        <div className='my-10 py-10 pb-12 bg-[#F5F5F3]'>
            <div className="container">
                <div className=''>
                    <div className='mx-auto max-w-[450px] bg-white rounded-md shadow-lg p-5'>
                        <h2 className='text-primeColor text-center font-titleFont text-2xl font-semibold mb-3'>Login</h2>
                        <form action="" method="post" onSubmit={handleSubmit(Submit)}>
                            <div className=''>
                                <input type="email" placeholder='Email'
                                {...register("email",{required:"Please enter an email"})}
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                {errors.email?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.email.message}!
                                    </p>
                                )}
                            </div>
                            <div className='mt-3'>
                                <input type="password" placeholder='Password'
                                {...register("password",{required:"Please enter a password"})}
                                value={pass} onChange={(e)=>setPass(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                {errors.password?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.password.message}!
                                    </p>
                                )}
                            </div>
                            <div className='flex justify-center mt-2'>
                                <Link className='w-[100%] text-sm font-bodyFont'>
                                    Forget your password ?
                                </Link>
                            </div>
                            <div className='flex justify-center gap-5 mt-8'>
                                    <input type="submit" value="Login" 
                                    className='text-white bg-slate-950 py-[3px] pb-[5px] px-6 rounded-full cursor-pointer
                                    font-bodyFont'/>
                                <Link to={"/signup"}
                                className='text-slate-950 bg-amber-600 py-[4px] pb-[3px] px-6 rounded-full cursor-pointer
                                font-bodyFont hover:bg-slate-950 hover:text-white duration-300'>
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;