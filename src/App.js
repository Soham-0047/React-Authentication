import React, { useState,useEffect } from "react";
import Form from "./components/common/Form";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home"

import {app} from "./firebase-config";

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {ToastContainer,toast} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css'





export default function App() {

  //Store the data from input field we useed states

  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')
  
  const navigate = useNavigate();


  const handleAction = (id)=>{
    // console.log(id)

    const authentication =getAuth();

    if(id==2){
      createUserWithEmailAndPassword(authentication,email,password).then((response)=>{
        // console.log(response)\
        navigate("/home")
        sessionStorage.setItem('Auth Token',response._tokenResponse.refreshToken)
      })
      .catch((error)=>{
        console.log(error.code)
       
        if(error.code ==='auth/email-already-in-use'){
          toast.error("Email Already Present")
          
          
        }
        if(error.code ==='auth/invalid-email'){
          toast.error("Invalid Email Format")
        }
        if(error.code ==='auth/weak-password'){
          toast.error("Weak Password")
        }

      })
    }

    if(id==1){
      signInWithEmailAndPassword(authentication,email,password).then((response)=>{
        // console.log(response)\
        navigate("/home")
        sessionStorage.setItem('Auth Token',response._tokenResponse.refreshToken)
      })
      .catch((error)=>{
        console.log(error.code)
        if(error.code ==='auth/wrong-password'){
          toast.error("check Password")
          
        }
        if(error.code ==='auth/user-not-found'){
          toast.error("check Email")
        }

      })
    }
    
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])

  return (
   
      <div className="app">
        <>
        <ToastContainer />
   
      

        <Routes>
          <Route path="/login" element={<Form title="Login" setEmail={setEmail} setPassword={setPassword}
          handleAction={()=> handleAction(1)}/>}/>


          <Route path="/register" element={<Form title="Register" setEmail={setEmail} setPassword={setPassword}
          handleAction={()=> handleAction(2)}/>}/>

          <Route path="/home" element={<Home/>}/>

        </Routes>
        

        </>
       
      </div>
   
  );
}
