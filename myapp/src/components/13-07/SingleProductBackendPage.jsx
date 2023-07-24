import React from 'react'
import './SingleProductBackendPage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleProductBackendPage = () => {

    const { id } = useParams();
    const [allProduct, setAllProduct] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [isUserLogin, updateUserLogin] = useState(false);
    const [currentEmail, setCurrentEmail] = useState("");
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setAllProduct(json))
    }, [])

    useEffect(() => {
        if (id && allProduct.length) {
            const result = allProduct.find((product) => product.id == id);
            setSingleProduct(result);
        }
    }, [id, allProduct]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            updateUserLogin(true);
            setCurrentEmail(user.email);
        }
    }, [])

    console.log(singleProduct, "single Product");
    // console.log(singleProduct.rating.rate);
    // console.log(singleProduct.rating.count);

    function addToCart() {
        if (isUserLogin) {
            const users = JSON.parse(localStorage.getItem("Users"));
            console.log(users,"single-page-all-user");
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == currentEmail) {
                    users[i]?.cart.push(singleProduct);
                    localStorage.setItem("Users", JSON.stringify(users));
                    alert("product Added Successfully");
                    router("/dummy-backend-product");
                    break;
                }
            }
        }
        else {
            alert("Please login first");
            router("/login");
        }
    }


    return (
        <>
            <div className='single-product-body'>
                <div className="single-product-main-body">
                    <div className="left-div">
                        <img src={singleProduct.image} alt="" />
                    </div>
                    <div className="right-div">
                        <h2>{singleProduct.title}</h2>
                        <h2>Rs. {singleProduct.price}</h2>
                        <p>{singleProduct.description}</p>
                        <button onClick={addToCart} className='button-single-product'>Add to Cart</button>
                        {/* <p>{singleProduct.rating.rate}</p> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default SingleProductBackendPage;