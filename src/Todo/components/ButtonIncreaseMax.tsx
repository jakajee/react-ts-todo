import * as React from 'react';
import { EnvironmentContext, EnvironementContextType } from '../contexts/EnvironmentContext';
import TodoContext from '../contexts/TodoContext';
import withContext from '../contexts/withContext';
import { ITodoContext } from '../contexts/TodoContext.type';

type ButtonType = {
    envContext: EnvironementContextType,
    todoContext: ITodoContext
}

function ButtonIncreaseMax(props: ButtonType) {
    const {
        envContext,
        todoContext
    } = props;

    if(envContext.maximumTodo !== todoContext.todos.length) {
        return null;        
    }

    return (
        <button type="button" onClick={envContext.incrementMaximumTodo}>Increase Max</button>
    )
}

const withTodo = withContext<ITodoContext>(ButtonIncreaseMax, TodoContext, "todoContext");

export default withContext<EnvironementContextType>(withTodo, EnvironmentContext, "envContext");
