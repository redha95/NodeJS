import React from "react";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {fetchTodos} from "../../redux/actions/todo";

class TodoListContainer extends React.Component {

        componentDidMount(){
            this.props.loadTodos();
        }
        render(){
            return <TodoList todos={this.props.todos}/>
        }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    };
}

// createur d'actions
const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: () => dispatch(fetchTodos())
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer);