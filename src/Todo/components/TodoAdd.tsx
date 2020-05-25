import * as React from 'react';
import ButtonIncreaseMax from './ButtonIncreaseMax';

import * as actions from '../actions/';
import { BaseAction } from '../actions/action.type';
import { Todo } from '../Todo.type';

type TodoAddProps = {
    addTodo(todo: Todo): BaseAction
}

const TodoAdd = (props: TodoAddProps) => {
    const [todo, setTodo] = React.useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodo('');
        props.addTodo({ todo, flagComplete: false });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

    return (
        <form onSubmit={onSubmit} data-testid="frmTodoAdd">
            <input type="text" onChange={onChange} value={todo} data-testid="txtTodo" />
            <button type="submit">Add</button>
            <ButtonIncreaseMax />
        </form>
    )
}

export default TodoAdd;