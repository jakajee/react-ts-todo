import * as React from 'react';
import { Todo } from '../contexts/TodoContext.type';
import TodoContext from '../contexts/TodoContext';

type TodoItemProps = Todo & { index: number };

const TodoItem = (props: TodoItemProps) => {
    const { toggleTodo } = React.useContext(TodoContext);
    const defaultStyle = {
        cursor: "pointer",
        width: "auto"
    } as React.CSSProperties

    const style = props.flagComplete ? {
        ...defaultStyle,
        color: "green",
        textDecoration: "line-through"
    } as React.CSSProperties : defaultStyle;

    return (
        <li style={style} onClick={() => toggleTodo(props.index)}>
            {props.todo}
        </li>
    )
}

export default TodoItem;