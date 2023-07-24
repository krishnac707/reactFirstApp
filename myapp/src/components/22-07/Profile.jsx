import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

const Profile = () => {

    const { login } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const router = useNavigate();

    const handlingForm = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        if (!currentUser) {
            router('/login')
        }
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                setUserData(allUser[i])
            }
        }
    },[])

    const formValidation =() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                allUser[i].name = userData.name;
                allUser[i].password = userData.password;
                currentUser.name= userData.name;
                currentUser.password = userData.password; 
            }
        }
        login(currentUser)
        localStorage.setItem("Users",JSON.stringify(allUser));
        localStorage.setItem("Currentuser",JSON.stringify(currentUser));
        setUserData({});
        alert("profile updated");
    }

    return (
        <div className='formCss'>
            <form onSubmit={formValidation}>
                <label>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="text" value={userData.name} name="name" onChange={handlingForm} /><br />
                <label>Password : </label>
                <input type="text" value={userData.password} name="password" onChange={handlingForm} /><br />
                <input type="submit" value="Update" className='submitCss' />
            </form>
        </div>
    )
}

export default Profile