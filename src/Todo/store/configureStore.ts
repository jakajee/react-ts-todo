import { History } from 'history';
import reducers, { ApplicationState } from '../reducers';
import { combineReducers, createStore, compose } from 'redux';
import { connectRouter } from 'connected-react-router';

function configureStore(
    history: History,
    initialState?: ApplicationState
) {

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const store = createStore(
        rootReducer,
        initialState
    )

    return store;
}

export default configureStore;