import * as React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { Todo } from '../Todo.type';
import { ApplicationState } from '../reducers';

type TodoListState = {
    todoList: Array<Todo>
}

const TodoList = (props: TodoListState) => {
    return (
        <div>
            Todo List
            {props.todoList.map((item, index) => 
                <TodoItem  key={index} {...item} index={index} />)}
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        todoList: Object.values(state.todoList)
    }
}

export default connect(mapStateToProps, null)(TodoList);