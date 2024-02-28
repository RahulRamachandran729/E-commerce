import React, { useEffect } from 'react';
import { BrowserRouter, Routes,Route} from "react-router-dom" ;
import {LoginPage, SignupPage , ActivationPage } from "./Routes";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {server}from"./server"
import HomePage from './pages/HomePage';


const App = () => {

  useEffect(()=>{
    axios.get(`${server}/getuser`,{
      withCredentials:true,
    })
    .then((res)=>toast.success(res.data.message))
    .catch((err)=>{
      toast.error(err.response.data.message);
    });
  },[]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element ={<LoginPage/>}/>
      <Route path='/Home'  element={<HomePage/>}/>
      <Route path="/Signup" element={<SignupPage/>}/>
      <Route path="/activation/:activation_token" element=
      {<ActivationPage/>}/>
    </Routes>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition:Bounce
    />
    </BrowserRouter>
    
  );
  
};

export default App;
