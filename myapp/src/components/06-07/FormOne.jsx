import axios from "axios";
import { useState } from "react";

const FormOne = () => {

    const [name,updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [password,updatePassword] = useState("");

    const setName = (event) =>{
        console.log(event,"name");
        updateName(event.target.value);
        console.log(event,"name13");

    }

    const setEmail = (event) =>{
        updateEmail(event.target.value);
    }

    const setPassword = (event) =>{
        updatePassword(event.target.value);
    }

    async function registrationFormSubmit(event){
        console.log(event,"hello 23");
        event.preventDefault();
        if(!name){
            return alert("Name is required");
        }

        if(name.length < 6){
            return alert("Name should be greater than 5");
        }

        if(!email){
            return alert("Email is required");
        }

        if(!password){
            return alert("Password is required");
        }

        if(password.length < 6){
            return alert("password should be greater than 5");
        }

        // const res = await axios.post("url",{
        //     name,
        //     email:"emai",
        //     password
        // })

        const res = { data : { message : "ok", status: 200 }}

        if(res.data.message == "ok"){
            return alert("Data Submitted!!!");
        }
        else
        {
            return alert("Internal server error...")
        }

    }

    return(
        <div style={{display:"flex",justifyContent:"center"}}>
            <form onSubmit={registrationFormSubmit} >
                <label>Name :</label><br />
                <input onChange={setName} type="text" placeholder="Enter Your Name" /><br />
                <label>Email :</label><br />
                <input onChange={setEmail} type="email" placeholder="Enter Email" /><br />
                <label>Password :</label><br />
                <input onChange={setPassword} type="password" placeholder="Enter your Password" /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default FormOne;