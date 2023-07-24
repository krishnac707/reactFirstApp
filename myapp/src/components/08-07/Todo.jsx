import { memo } from "react";

const Todo = ({ todos, addTodos }) => {
    console.log("inside todo calling...");
    return (
        <div>
            <h1>Todo list :</h1>
            {todos.map((showTodo) => (
                <p>{showTodo}</p>
            ))}
            <button onClick={addTodos}>add Todo</button>
        </div>
    )
}

export default memo(Todo);
