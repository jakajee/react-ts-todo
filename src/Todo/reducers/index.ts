import todoListReducer from './todoListReducer';
import { TodoState } from '../Todo.type';
import maxTodoReducer from './maxTodoReducer';

export interface ApplicationState {
    todoList: TodoState,
    maxTodo: number
}

export default {
    todoList: todoListReducer,
    maxTodo: maxTodoReducer
};