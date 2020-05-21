import { Todo } from "../Todo.type";

export type BaseAction = {
    type: string,
    payload: string | number | Todo 
}