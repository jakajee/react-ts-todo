import React from 'react';
import MainRoute from '../route';
import Root from '../root';
import { createBrowserHistory } from 'history';
import configureStore from '../Todo/store/configureStore';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({
    basename: baseUrl
})

const store = configureStore(history);

const App = (props: any) => {
    return (
        <Root store={store}>
            <MainRoute />
        </Root>
    )
}

export default App;