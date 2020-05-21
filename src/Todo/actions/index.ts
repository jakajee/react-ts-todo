export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EXTEND_MAX = 'EXTEND_MAX';

export function addTodo(todo: string): BaseAction<string> {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function toggleTodo(index: number): BaseAction<number> {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}

export function extendMaxTodo(): BaseAction<number> {
    return {
        type: EXTEND_MAX,
        payload: null
    }
}