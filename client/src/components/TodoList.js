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

    handleNew = () => {
        const todo = {text: "new todo"};

        this.setState({
            todos: [...this.state.todos,todo]
        });
    }

    render(){


        return <>
        <TodoForm onSubmit={this.handleNew}/>
         <ul>
            {
                this.state.todos.map((todo,index) => <TodoItem key={index} todo={todo}/>)
            }
        </ul>
        </>;
    }
}

export default TodoList;