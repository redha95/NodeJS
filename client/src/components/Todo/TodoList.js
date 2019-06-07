import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {

    state = {
        todos : [
            {text: "todo 1"},
            {text: "todo 2", checked: true}
        ]
    }

    handleNew = (text) => {
        const todo = {text};

        this.setState({
            todos: [...this.state.todos,todo]
        });
    }
    handleCheck = (todo) => {
        this.setState({
        todos : this.state.todos.map(item => {
            if(todo.text === item.text) {
                item.checked = !item.checked;
            }
            return item;
        })
    });
    }

    handleDelete = (todo) => {
        this.setState({
        todos : this.state.todos.filter(item => {
            return todo.text !== item.text;
        })
    });
    }

    render() {

        return <>
        <TodoForm onSubmit={this.handleNew} />
        <ul>
        {
            this.state.todos.map((todo,index) => <TodoItem key={index} todo={todo} onCheck={this.handleCheck} onDelete={this.handleDelete}/>)
        }
        </ul>
        </>;
    };
}

export default TodoList;