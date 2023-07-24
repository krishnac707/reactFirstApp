import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function UseEffectFourth(){

    const [getCount,setCount] = useState(1);
    const [getCount1,setCount1] = useState(10);
    const [getCount2,setCount2] = useState(20);
    const routes = useNavigate();

    useEffect(()=>{
        console.log("hello from krishna");

        if(getCount1 === 12)
        {
            routes('/welcome');
        }

    },[getCount1,getCount2]);

    function add(){
        setCount(previousValue => previousValue+1)
    }

    function add1(){
        setCount1(previousValue => previousValue+1)
    }
    function add2(){
        setCount2(previousValue => previousValue+1)
    }

    function reDirect(){
        routes('/wecome')
    }

    return(
        <div>
            <h1>Counter  : {getCount}</h1>
            <button onClick={add}>Counter 1</button>
            <h1>Counter 1 : {getCount1}</h1>
            <button onClick={add1}>Counter 2</button>
            <h1>Counter 2 : {getCount2}</h1>
            <button onClick={add2}>Counter 3</button><br></br>
            <button onClick={reDirect}>Welcome</button>
        </div>
    )
}

export default UseEffectFourth;