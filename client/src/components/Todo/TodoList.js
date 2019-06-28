import React from "react";
import TodoItemContainer from "./TodoItemContainer";
import TodoContext from "../../context/TodoContext";

//class TodoList extends React.Component {
    /*  state = {
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
    }*/

class TodoList extends React.Component {
    static contextType = TodoContext;

    componentDidMount(){
        this.context.loadTodos();
    }

    render() {
        return <ul>
        {
            this.context.todos.map((todo,index) => <TodoItemContainer key={index} todo={todo}></TodoItemContainer>)
         
       
        }
         </ul>;
    }
}

export default TodoList;