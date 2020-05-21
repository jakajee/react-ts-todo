import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './Todo/reducers'

const store = createStore({
    reducers
})

const Root: React.FC = ({ children }) => {
    return (
        <Provider store={createStore(store)}>
            {children}
        </Provider>
    )
}

export default Root;