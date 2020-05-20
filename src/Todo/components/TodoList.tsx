import * as React from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../contexts/TodoContext';
import withContext from '../contexts/withContext';
import { ITodoContext } from '../contexts/TodoContext.type';

type TodoListProps = { todoContext: ITodoContext };

const TodoList = (props: TodoListProps) => {

    const { todos } = props.todoContext;

    return  (
        <React.Fragment>
            <div>
                Todo List
            </div>
            <ul>
                {todos.map((item, idx) => (<TodoItem {...item} index={idx} key={idx} />))}
            </ul>
        </React.Fragment>
    )
}

export default withContext<ITodoContext>(TodoList, TodoContext, "todoContext");