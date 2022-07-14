import React, { useEffect } from 'react'

import {useNavigate} from "react-router-dom"

const Home = () => {

    const handleLogout = ()=>{
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(()=>{
        
        let authToken = sessionStorage.getItem('Auth Token')
        // console.log(authToken)

        if(authToken){
            navigate('/home')
        }
        if(!authToken){
            navigate('/login')
        }

    },[])
  return (
    <div><h1>Home Page</h1>
    <button onClick={handleLogout}>Log Out</button></div>
  )
}

export default Home