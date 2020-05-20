import * as React from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { StoreTodo } from '../contexts/TodoContext';

const TodoMain = () => {

    return (
        <StoreTodo>
            Hello World: Sample To do
            <hr />
            <TodoAdd />
            <TodoList />
        </StoreTodo>
    )
}

export default TodoMain;