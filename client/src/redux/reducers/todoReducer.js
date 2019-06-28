const todoReducer = (state = {
    todos: []
},action) => {
    switch(action.type){
        case 'TODO_LIST_RECEIVED':
            return {
                ...state,
                todos: action.payload.todos
            }
        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
                }
        case 'TODO_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if(action.payload.todo.text === item.text){
                        item.checked = !item.checked;
                    }
                })
            }
        case 'TODO_DELETE':
            return {
                ...state,
                todos: state.todos.filter(item => {
                    return action.payload.todo.text !== item.text;
                })
            }
        default:
            return state;
    }
}

export default todoReducer;