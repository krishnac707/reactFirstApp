import { useMemo, useState } from "react";

const UseMemoEg = () => {

    const [todos, updateTodos] = useState(["had breakfast", "had lunch"]);
    const [counter, setCounter] = useState(0);

    const Number = useMemo(() => { return expNumber(counter) },[counter]);

    function addTodos(){
        updateTodos([...todos,"had dinner"]);
    }


    return (
        <div>

            <h1>Epensive Number: {Number}</h1>
            <h1>counter : {counter}</h1>
            <button onClick={()=>setCounter((preValue) => preValue + 1)}>Increment</button>

            <h1>Todos : </h1>
            {
                todos.map((todo,i)=>(
                    <h3 key={i}>{todo}</h3>
                ))
            }
            <button onClick={addTodos} >Add Todos</button>


        </div>
    )
}

const expNumber = (number) => {
    console.log("inside expensive number");
    for (var i = 0; i < 10000000; i++) {
        number = number + 1;
        
    }
    console.log(number);
    return number;
}

export default UseMemoEg;