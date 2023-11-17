import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let [first,setFirst] = useState("");
    let [last,setLast] = useState("");
    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");
    let {register,formState:{ errors },handleSubmit} = useForm();
    let url = useNavigate();
    const Submit = (data) => {
        console.log(data);
        setFirst("");
        setLast("");
        setEmail("");
        setPass("");
        url("/login");
    }
    return (
        <div className='my-10 py-10 pb-12 bg-[#F5F5F3]'>
            <div className="container">
                <div className=''>
                    <div className='mx-auto max-w-[450px] bg-white rounded-md shadow-lg p-5'>
                        <h2 className='text-primeColor text-center font-titleFont text-2xl font-semibold mb-3'>
                            Create Account
                        </h2>
                        <form action="" method="post" onSubmit={handleSubmit(Submit)}>
                            <div className=''>
                                <input type="text" placeholder='First name'
                                {...register("first",{required:"Please enter a first name"})}
                                value={first} onChange={(e)=>setFirst(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                {errors.first?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.first.message}!
                                    </p>
                                )}
                            </div>
                            <div className='mt-3'>
                                <input type="text" placeholder='Last name'
                                {...register("last",{required:"Please enter a last name"})}
                                value={last} onChange={(e)=>setLast(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                {errors.last?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.last.message}!
                                    </p>
                                )}
                            </div>
                            <div className='mt-3'>
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
                            <div className='flex justify-center gap-5 mt-8'>
                                
                                    <input type="submit" value="Create" 
                                    className='text-white bg-slate-950 py-[3px] pb-[5px] px-6 rounded-full cursor-pointer
                                    font-bodyFont'/>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

//<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1793298.1390472383!2d31.11441684105702!3d28.613710720087546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1699994942749!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>