import React from 'react'
import TodoContext from '../../context/TodoContext';

class TodoItemActions extends React.Component {

    static contextType = TodoContext;
    
    render(){


       const {todo} = this.props;

        return <>
            <button onClick={ () => this.context.deleteTodo(todo)}> Delete</button>
        </>;
    }
}

export default TodoItemActions;
