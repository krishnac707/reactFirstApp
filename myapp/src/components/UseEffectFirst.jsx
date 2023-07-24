import { useEffect, useState } from "react";

function UseEffectFirst(){

    const [getNum,UpdateNum] = useState(1);

    useEffect(()=>{
        console.log("This is first type useEffect");
    })

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

export default UseEffectFirst;