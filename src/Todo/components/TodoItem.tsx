import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Todo } from '../Todo.type';
import { BaseAction } from '../actions/action.type';

type BaseProps = {
    index: number,
    toggleTodo: (index: number) => BaseAction
}

type TodoItemProps = Todo & BaseProps;

const TodoItem = (props: TodoItemProps) => {
    return (
        <li style={{
            cursor: "pointer",
            textDecorationLine: props.flagComplete ? "line-through": "none"
        }}
            onClick={() => props.toggleTodo(props.index)}>
            {props.todo}
        </li>
    )
}

export default connect(null, { ...actions })(TodoItem);