import React from 'react';
import StoreEnvironment from '../Todo/contexts/EnvironmentContext';
import MainRoute from '../route';

const App = (props: any) => {

    return (
        <StoreEnvironment>
            <MainRoute />            
        </StoreEnvironment>
    )
}

export default App;