import { ADD_TODO, TOGGLE_TODO } from "../actions";
import { BaseAction } from "../actions/action.type";
import { TodoState, Todo } from "../Todo.type";

export default function (state: TodoState = {}, action: BaseAction): TodoState {
    switch (action.type) {
        case ADD_TODO: return addTodoReducer(state, action);
        case TOGGLE_TODO: return toggleTodoReducer(state, action);
        default: return state;
    }
}

function addTodoReducer(state: TodoState, action: BaseAction) {
    const newTodo = <Todo>action.payload;
    const idx = Object.keys(state).length;
    return {
        ...state,
        [idx]: { ...newTodo }
    }
}

function toggleTodoReducer(state: TodoState, action: BaseAction) {
    debugger;
    const index = <number>action.payload;
    const todo: Todo = state[index];
    return {
        ...state,
        [index]: {
            ...todo,
            flagComplete: !todo.flagComplete
        }
    }
}