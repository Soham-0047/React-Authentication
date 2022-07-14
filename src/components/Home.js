import React, { useEffect } from 'react'

import {useNavigate} from "react-router-dom"
import Button from "@mui/material/Button"


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
    <div style={{textAlign:"center"}}><h1>Home Page</h1>
    <Button variant="contained"onClick={handleLogout}>Log Out</Button>
    </div>
  )
}

export default Home