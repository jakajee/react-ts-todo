import { BaseAction } from "../../actions/action.type";
import { ApplicationState } from "../../reducers";
import { ADD_TODO } from "../../actions";

type ValidationMiddlewareStore = {
    getState: () => ApplicationState
}

export default (store: ValidationMiddlewareStore) => next => (action: BaseAction) => {
    const {
        maxTodo,
        todoList
    } = store.getState();

    if (action.type === ADD_TODO && maxTodo === Object.values(todoList).length) {
        alert('Maximum todo has reached')
        return;
    }

    next(action);

}