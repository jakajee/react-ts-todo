import * as React from 'react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';

export type RootType = {
    children: React.ReactNode,
    store: Store<any, AnyAction>
}

const Root: React.FC<RootType> = (props: RootType) => {
    return (
        <Provider store={props.store}>
            {props.children}
        </Provider>
    )
}

export default Root;