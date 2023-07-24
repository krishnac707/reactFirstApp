import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';

function Navbar() {

    const {state,logout} = useContext(AuthContext);
    console.log(state,"state");

    const [user, setUser] = useState({});
    const router = useNavigate();

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        }
        else{
            setUser({});
        }
    },[state])

    return (
        <div className='navbar-body'>
            <div className='left-navbar' onClick={() => router("/")}>
                <h3 style={{cursor:"pointer"}}>Online Shoppping</h3>
            </div>
            <div className='right-navbar'>
                {user?.email ?
                    <>
                        <h3 onClick={() => router("/dummy-backend-product")} style={{ cursor: "pointer" }}>Product</h3>
                        <h3 onClick={()=>router("/profile")} style={{ cursor: "pointer" }}>Profile-{user?.name}</h3>
                        <h3 onClick={()=>router("/cart")} style={{ cursor: "pointer" }}>Cart</h3>
                        <h3 onClick={logout} style={{ cursor: "pointer" }} >Logout</h3>
                    </>
                    :
                    <h3 onClick={() => router("/login")} style={{marginLeft:"90%",cursor:"pointer"}}>Login</h3>
                }
            </div>
        </div>
    )
}

export default Navbar;