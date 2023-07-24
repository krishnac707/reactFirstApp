import { useEffect, useState } from "react";
import './DummyBackendProduct.css'
import { useNavigate } from "react-router-dom";

const DummyBackendProduct = () => {

    const [products, updateProducts] = useState([]);
    const router = useNavigate();


    console.log(products, "- products")

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => updateProducts(json))
    }, [])

    const redirect = (id) =>{
        router(`/single-backent-product/${id}`)
    }

    return (
        <div>
            <h1>Products :</h1>

            {
                products.length ?
                    <div className="allProductDiv">
                        {
                            products.map((pro) => (
                                <div key={pro.id} className="productDiv" onClick={()=>redirect(pro.id)}>
                                    <img src={pro.image} alt="" />
                                    <h4>Name : {pro.title}</h4>
                                    <h4>Price : {pro.price}</h4>
                                </div>
                            ))
                        }
                    </div> 
                    :
                    <h1>Loading....</h1>
            }
        </div>
    )
}

export default DummyBackendProduct;