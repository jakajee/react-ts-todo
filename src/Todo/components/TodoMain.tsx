import * as React from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const TodoMain = () => {

    return (
        <React.Fragment>
            Hello World: Sample To do
            <hr />
            <TodoAdd />
            <TodoList />
        </React.Fragment>
    )
}

export default TodoMain;