export interface Todo {
    todo: string,
    flagComplete: boolean
}

export interface TodoState {
    [index: number]: Todo    
}
