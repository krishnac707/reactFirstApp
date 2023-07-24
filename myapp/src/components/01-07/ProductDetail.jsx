import React from 'react';
import productData from './../data/productData.json'

const ProductDetail = () => {
    console.log(productData)
    return (
        <div>
            {
                
                productData.map((product) =>
                    <div key={product._id}>
                        <h2>Product Name : {product.name}</h2>
                        <p>Product Price : {product.price}</p>
                        <p>Product Description : {product.description}</p>
                    </div>
                )
            }
        </div>
    )
};


export default ProductDetail;
