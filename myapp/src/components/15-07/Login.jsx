import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import { useContext } from 'react';
import { AuthContext } from './../../context/Auth.context';

const Login = () => {

    const { state, login } = useContext(AuthContext);

    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();

    const handlingForm = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const formValidation = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users"));
            var flag = false

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true
                    console.log(users[i],"27");
                    login(users[i]);
                    alert("login successful");
                    router("/");
                    setUserData({ email: "", password: "" });
                    break;
                }
            }

            if (flag == false) {
                return alert("check email or password")
            }
        }
        else {
            alert("something is missing")
        }
    }

    return (
        <div className='formCss'>
            <form onSubmit={formValidation}>
                <label>Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="email" name="email" onChange={handlingForm} /><br />
                <label>Password : </label>
                <input type="password" name="password" onChange={handlingForm} /><br />
                <input type="submit" value="Login" className='submitCss' />
                <p>Create new Account <span onClick={() => router("/registration")} style={{ cursor: "pointer", color: "green" }}><b>sign up here</b></span></p>
            </form>
        </div>
    )
}

export default Login