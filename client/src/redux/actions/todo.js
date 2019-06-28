export function fetchTodos(){
    return  {
        type: "TODO_LIST_RECEIVED",
        payload: {
            todos: [
                {text: "todo 1"},
                {text: "todo 2 mec", checked: true}
            ]
        }
    }
};

export function addTodo(todo){
    return  {
        type: "TODO_ADD",
        payload: {
            todos: [
               todo
            ]
        }
    }
};

export function completeTodo(todo){
    return  {
        type: "TODO_COMPLETE",
        payload: {
            todos: [
               todo
            ]
        }
    }
};

export function deleteTodo(todo){
    return  {
        type: "TODO_DELETE",
        payload: {
            todos: [
               todo
            ]
        }
    }
};