import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Registration.css';


const Registration = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();

    const handlingInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handlingForm = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const arrayStorage = JSON.parse(localStorage.getItem("Users")) || [];

            console.log(arrayStorage,"hello array storage");

            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart:[],
            }
           
            arrayStorage.push(userDataObj);
            console.log(arrayStorage,"hello");
            localStorage.setItem("Users", JSON.stringify(arrayStorage));
            alert("registration successful");
            router("/login")

        }
        else
        {
            alert("please fill all details");
        }

    }


    return (
        <div className='formCss'>
            <form onSubmit={handlingForm}>
                <label>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="text" name="name" onChange={handlingInput} /><br />
                <label>email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" name="email" onChange={handlingInput} /><br />
                <label>password:&nbsp;&nbsp; </label>
                <input type="password" name="password" onChange={handlingInput} /><br />
                <input type="submit" value='Register' className='submitCss' />
                <p>Already have account please <span onClick={()=>router("/login")} style={{cursor:"pointer",color:"green"}}><b>sign in</b></span></p>
            </form>
        </div>
    )
}

export default Registration