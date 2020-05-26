import * as React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { Todo } from '../Todo.type';
import { ApplicationState } from '../reducers';

type TodoListState = {
    todoList: Array<Todo>,
    max: number
}

const TodoList = (props: TodoListState) => {
    const style = {
        color: props.todoList.length >= props.max ? "red" : "black"
    };

    return (
        <div>
            Todo List <strong style={style}>({props.max})</strong>
            {props.todoList.map((item, index) => 
                <TodoItem  key={index} {...item} index={index} />)}
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        todoList: Object.values(state.todoList),
        max: state.maxTodo
    }
}

export default connect(mapStateToProps, null)(TodoList);