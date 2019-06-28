import React,{useContext,useEffect,useRef} from "react";
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

const TodoList = () => {
    const context = useContext(TodoContext);
    const ref = useRef();


    useEffect(() => {
        context.loadTodos();
        ref.current = true;
    },[]);

    useEffect(() => {
       if(ref.current){
           //
       }
    });

        return <ul>
        {
            context.todos.map((todo,index) => <TodoItemContainer key={index} todo={todo}></TodoItemContainer>)
         
       
        }
         </ul>;
}

export default TodoList;