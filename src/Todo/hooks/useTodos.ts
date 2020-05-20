import * as React from 'react';
import { Todo } from '../contexts/TodoContext.type';
import { EnvironmentContext } from '../contexts/EnvironmentContext';

type useTodoResult = readonly [Todo[], (todo: string) => void, (index: number) => void]

export default () => {
    const environment = React.useContext(EnvironmentContext);

    const [todos, setTodo] = React.useState(new Array<Todo>());
    const addTodo = (todo: string) => {
        if (!todo)
            return alert('please input todo');

        if (todos.length === environment.maximumTodo)
            return alert('maximum todo has reached')

        const obj = {
            todo,
            flagComplete: false
        }

        setTodo([obj, ...todos]);
    }

    const toggleTodo = (index: number) => {
        const newTodos = todos.map((todo: Todo, idx: number) => ({
            ...todo,
            flagComplete: idx === index ? !todo.flagComplete : todo.flagComplete
        }));
        setTodo(newTodos);
    }

    return [todos, addTodo, toggleTodo] as useTodoResult;
}