import todoListReducer from './todoListReducer';
import { TodoState } from '../Todo.type';

export interface ApplicationState {
    todoList: TodoState
}

export default {
    todoList: todoListReducer
};