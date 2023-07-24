import { useCallback, useState } from "react";
import Todo from "./Todo";

const TodoCounter = () => {

    const [counter, setcounter] = useState(0);
    const [todos,updateTodos] = useState(["eat","running","sleeping"]);

    // function addTodos(){
    //     updateTodos([...todos,"start here"]);
    // }

    const addTodos = useCallback(()=>{
        updateTodos([...todos,"start here"]);
    },[todos])

    return (
        <div>
            <Todo todos={todos} addTodos={addTodos}  />
            <h1>Counter : {counter}</h1>
            <button onClick={() => setcounter((previousValue) => previousValue + 1)}>+</button>
        </div>
    )
}

export default TodoCounter;