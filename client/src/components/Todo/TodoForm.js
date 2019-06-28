import React , {useState,useContext}from 'react';
import TodoContext from '../../context/TodoContext';


const TodoForm = (props) => {

    const [text, setText] = useState("");

    const context = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        context.newTodo({text});
        return false;
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
    }

        return <form onSubmit={handleSubmit}>
            <input onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>;
        
    
}

export default TodoForm;