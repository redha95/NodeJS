import React from 'react'

class TodoItemActions extends React.Component {
    render(){

        const {onComplete,onDelete} = this.props;

        return <>
            <a onClick={onComplete}>Set complete</a>
            <a onClick={onDelete}>Delete</a>
        </>;
    }
}

export default TodoItemActions;
