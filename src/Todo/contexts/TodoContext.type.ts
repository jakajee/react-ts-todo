export interface Todo {
    todo: string,
    flagComplete: boolean
}


export interface ITodoContext {
    todos: Todo[],
    addTodos: (todo: string) => void,
    toggleTodo: (index: number) => void,
    loading: boolean
}