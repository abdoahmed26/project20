import { faEnvelope, faHouseChimney, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contact = () => {
    let [first,setFirst] = useState("");
    let [phone,setPhone] = useState("");
    let [email,setEmail] = useState("");
    let [message,setMess] = useState("");
    let {register,formState:{ errors },handleSubmit} = useForm();
    const form = useRef();
    const Submit = (data) => {
        const serviceId = "service_foosxef";
        const templateId = "template_eqltqr9";
        const publicKey = "QziCv_pqPoRL9rVk6";
        emailjs.send(serviceId, templateId, data, publicKey)
        .then((result) => {
            swal("Your Data Successfull Received!","","success");
            setFirst("");
            setPhone("");
            setEmail("");
            setMess("");
        }, (error) => {
            swal("Your Data not Received!","","error");
        });
    }
    return (
        <div className='my-10 py-10 pb-12 bg-[#F5F5F3]'>
            <div className='container'>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d891996.8828090647!2d31.142308248119!3d29.15397870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1699997620758!5m2!1sar!2seg" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='add'></iframe>
                </div>
                <div className='bg-white px-6 py-4 rounded-md shadow-md mt-8'>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='font-bold text-2xl text-primeColor font-bodyFont mb-3'>
                                Contact
                            </h2>
                            <div>
                                <form ref={form} action="" method="post" onSubmit={handleSubmit(Submit)}>
                                    <div className=''>
                                        <input type="text" placeholder='Name' name='name'
                                        {...register("name",{required:"Please enter a name !"})}
                                        value={first} onChange={(e)=>setFirst(e.target.value)}
                                        className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                        {errors.name?.type==="required" &&(
                                            <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className='mt-3'>
                                        <input type="email" placeholder='Email' name='email'
                                        {...register("email",{required:"Please enter an email !"})}
                                        value={email} onChange={(e)=>setEmail(e.target.value)}
                                        className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                        {errors.email?.type==="required" &&(
                                            <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className='mt-3'>
                                        <input type="text" placeholder='Phone number' name='phone'
                                        {...register("phone",{required:"Please enter a phone number !"})}
                                        value={phone} onChange={(e)=>setPhone(e.target.value)}
                                        className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                        {errors.phone?.type==="required" &&(
                                            <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className='mt-3'>
                                        <textarea placeholder='Comment' name='message'
                                        {...register("message",{required:"Please enter a comment !"})}
                                        value={message} onChange={(e)=>setMess(e.target.value)}
                                        className='bg-[#F5F5F3] w-[100%] h-20 p-1 px-3 outline-none rounded resize-none'>
                                        </textarea>
                                        {errors.message?.type==="required" &&(
                                            <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className='flex justify-start gap-5 mt-4'>
                                            <input type="submit" value="Send" 
                                            className='text-white bg-slate-950 py-[3px] pb-[5px] px-6 rounded-full 
                                            cursor-pointer font-bodyFont'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='font-semibold text-2xl text-primeColor font-titleFont mb-3'>
                                Get In Touch With Us
                            </h2>
                            <div className='text-gray-500'>
                                <div className='flex gap-2 items-center mb-4'>
                                    <FontAwesomeIcon icon={faHouseChimney}/>
                                    <p className='text-sm font-bodyFont'>
                                        33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center mb-4'>
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <p className='text-sm font-bodyFont'>
                                        (+91)7-723-4608
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center mb-4'>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                    <p className='text-sm font-bodyFont'>
                                        demo@company.com
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center mb-4'>
                                    <FontAwesomeIcon icon={faInfoCircle}/>
                                    <p className='text-sm font-bodyFont'>
                                        Monday - Friday 10 AM - 8 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;