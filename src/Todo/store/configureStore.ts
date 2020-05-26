import { History } from 'history';
import reducers, { ApplicationState } from '../reducers';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router';
import validation from './middlewares/validation';

function configureStore(
    history: History,
    initialState?: ApplicationState
) {
    const middlewares =  applyMiddleware(validation);

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const store = createStore(
        rootReducer,
        initialState,
        middlewares
    )

    return store;
}

export default configureStore;