import * as React from 'react';
import { Todo } from '../Todo.type';

const TodoItem = (props: Todo) => {
    return (
        <li>
            {props.todo}
        </li>
    )
}

export default TodoItem;