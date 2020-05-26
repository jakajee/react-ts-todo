import { BaseAction } from "./action.type";
import { Todo } from "../Todo.type";

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EXTEND_MAX = 'EXTEND_MAX';

export function addTodo(todo: Todo): BaseAction {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function toggleTodo(index: number): BaseAction {
    console.log(index);
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}

export function extendMaxTodo(): BaseAction {
    return {
        type: EXTEND_MAX,
        payload: null
    }
}