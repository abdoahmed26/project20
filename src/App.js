import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Shop from './component/Shop';
import Details from './component/Details';
import Cart from './component/Cart';
import Favorite from './component/Favorite';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Contact from './component/Contact';
import About from './component/About';
import Journal from './component/Journal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to={"home"}/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='details/:id' element={<Details/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='favourite' element={<Favorite/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='journal' element={<Journal/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
export default App;



// import { useForm } from "react-hook-form";
// const {
//   register,
//   formState: { errors },
//   handleSubmit,
// } = useForm();
// const onSubmit = (data) => console.log(data)
// <form onSubmit={handleSubmit(onSubmit)} className="absolute top-20">
//         <input type="text" className="border"
//           {...register("firstName", { required: "First Name is required",maxLength: 10,minLength:5 })}
//           aria-invalid={errors.firstName ? "true" : "false"}
//         />
//         {errors.firstName?.type === "required" && (
//           <p role="alert">{errors.firstName.message}</p>
//         )}
//         {errors.firstName?.type === "maxLength" && (
//           <p role="alert">Max Length Of First Name is 10 char</p>
//         )}
//         {errors.firstName?.type === "minLength" && (
//           <p role="alert">Min Length Of First Name is 5 char</p>
//         )}

//         <input type="email" className="border"
//           {...register("mail", { required: "Email Address is required" })}
//           aria-invalid={errors.mail ? "true" : "false"}
//         />
//         {errors.mail && <p role="alert">{errors.mail.message}</p>}

//         <input type="submit" />
// </form>