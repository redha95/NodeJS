import React from "react";
import TodoContext from "./TodoContext";

class TodoProvider extends React.Component {
    state = {
        todos: [],
        loadTodos: () => {
            this.setState({
                todos: [
                    {text: "test context"},
                    {text: "test 2"},
                ]
            })
        },
        newTodo: (todo) => {
            this.setState({
                todos: [...this.state.todos, todo]
            })
        },
        deleteTodo: (todo) => {
            this.setState({
                todos: this.state.todos.filter(item => {
                    return todo.text !== item.text
                })
            })
        }
    }

    render(){
        return <TodoContext.Provider value={this.state}>
        {this.props.children}
  </TodoContext.Provider>
    }
}

export default TodoProvider;