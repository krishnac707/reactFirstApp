import { useNavigate } from "react-router-dom";
import image from "./shopping-31.jpg";
import { useEffect, useState } from "react";
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from './../context/Auth.context';

function Home() {

    const router = useNavigate();

    const {state,logout} = useContext(AuthContext);
    const [isUserLogin,setUserLogin] = useState(false);

    useEffect(()=>{
        if(state?.user?.email)
        {
            setUserLogin(true);
        }
        else{
            setUserLogin(false);
        }
    },[state])

    return (
        <>
            <div><h1 className="home-welcome-heading-css">Welcome to Online Shopping</h1></div>
            <div>{isUserLogin ? <button className="home-login-button-css" onClick={logout}>Logout</button>:<button className="home-login-button-css" onClick={()=>router("/login")}>login</button>}</div>
            <img className="home-image-shopping-css" src={image} alt="" />
        </>
    )
}

export default Home;