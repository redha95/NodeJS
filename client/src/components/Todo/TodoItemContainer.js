import React from "react";
import TodoItem from "./TodoItem";
//import {connect} from "react-redux";
//import {deleteTodo, completeTodo} from "../../redux/actions/todo";

class TodoItemContainer extends React.Component {

        render(){
            return <TodoItem todo={this.props.todo} onCheck={this.props.complete} onDelete={this.props.delete}/>
        }
}


// createur d'actions
/*const mapDispatchToProps = (dispatch) => {
    return {
        delete: (todo) => dispatch(deleteTodo(todo)),
        complete: (todo) => dispatch(completeTodo(todo))
    };
}*/

export default TodoItemContainer;
//export default connect(undefined,mapDispatchToProps)(TodoItemContainer);