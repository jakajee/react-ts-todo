import * as React from 'react';
import { ApplicationState } from "../../Todo/reducers";
import { createBrowserHistory } from "history";
import configureStore from "../../Todo/store/configureStore";
import Root from "../../root";

export const RootTest = ({ children }) => {
    let state: ApplicationState;
    let mockHistory = createBrowserHistory({
        basename: '/'
    });
    let mockStore = configureStore(mockHistory, state);    

    return (
        <Root store={mockStore}>
            {children}
        </Root>
    )
}