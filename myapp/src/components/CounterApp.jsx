import { useState } from "react";

function CounterApp(){

    const [count,setcount] = useState(0);

    function add(){
        setcount(preValue => preValue + 1);
    }
    function sub(){
        setcount(preValue => preValue - 1);
    }

    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={add}><b>Addition by +1</b></button><br />
            <button onClick={sub}><b>Substraction by -1</b></button>
        </div>
    )
}

export default CounterApp;