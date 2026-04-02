import { useState } from "react";

function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
            checked: false,
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>

            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => toggleTodo(todo.id)}
                        />

                        <span
                            style={{
                                textDecoration: todo.checked ? "line-through" : "none",
                                margin: "0 10px",
                            }}
                        >
                            {todo.text}
                        </span>

                        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;