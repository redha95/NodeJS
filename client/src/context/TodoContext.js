import { createContext } from "react";

const TodoContext = createContext({
    todos: [],
    loadTodos: () => {},
    deleteTodo: () => {},
    newTodo: () => {}
});

export default TodoContext;