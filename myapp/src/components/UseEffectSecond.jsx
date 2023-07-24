import { useEffect, useState } from "react";
import axios from 'axios';

function UseEffectSecond(){

    const [getNum,UpdateNum] = useState(1);

    useEffect(()=>{
        // console.log("This is second type useEffect");

        async function getProducts(){
            const products = await axios.get("https://fakestoreapi.com/products/1")
            console.log(products,"products");
        }
        getProducts();
    },[])

    function add(){
        UpdateNum(previousValue => previousValue+1)
    }

    return( 
        <div>
        <h1>{getNum}</h1>
        <button onClick={add}>Increase Number</button>
        </div>
    )
}

export default UseEffectSecond;