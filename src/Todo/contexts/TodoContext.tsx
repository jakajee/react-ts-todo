import * as React from 'react';
import { ITodoContext } from './TodoContext.type';
import useTodos from '../hooks/useTodos';

const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);

export const StoreTodo = ({ children }) => {
    const [todos, addTodos, toggleTodo] = useTodos();

    const store = {
        todos,
        addTodos,
        toggleTodo
    } as ITodoContext;

    return (
        <TodoContext.Provider value={store}>
            {children}
        </TodoContext.Provider>
    )

};


export default TodoContext;
