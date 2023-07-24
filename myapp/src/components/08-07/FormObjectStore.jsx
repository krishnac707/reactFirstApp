import { useState } from "react";
import { useNavigate } from "react-router-dom";


const FormObjectStore = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const route = useNavigate();

    function handleData(event){
        setUserData({...userData, [event.target.name]:event.target.value});
    }

    async function registeringData(event) {
        event.preventDefault();
        if(!userData.name) return alert("name is required");
        if(!userData.email) return alert("email is required");
        if(!userData.password) return alert("password is required");
        if(userData.password.length < 8 ) return alert("password must be greater than 8 character....");

        // const postingData= await axios.post("/register-data",{
        //     name: userData.name,
        //     email:userData.email,
        //     password:userData.password
        // })

        alert("registeration successfull!!!!");
        route("/");

    }

    return (
        <div>
            <form onSubmit={registeringData}>
                <label>Name : </label><br />
                <input type="text" name="name" onChange={handleData} /> <br />
                <label>Email : </label><br />
                <input type="email" name="email" onChange={handleData} /><br />
                <label>Password : </label><br />
                <input type="password" name="password" onChange={handleData} /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormObjectStore;