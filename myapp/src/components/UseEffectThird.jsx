import { useEffect,useState } from "react";

function UseEffectThird() {
    const [getNum,setCounter1] = useState(100);
    const [getNum1,setCounter2] = useState(10);

    useEffect(()=>{
        console.log("inside use effect");
    },[getNum1])

    function add(){
        setCounter1(previousValue => previousValue+1)
    }

    function add1(){
        setCounter2(previousValue => previousValue+1)
    }

    return (
        <div>
            <h1>Counter : {getNum}</h1>
            <button onClick={add}>Increase Number</button>
            <h1>Counter 1: {getNum1}</h1>
            <button onClick={add1}>add Number by 1</button>
        </div>
    )

}

export default UseEffectThird;