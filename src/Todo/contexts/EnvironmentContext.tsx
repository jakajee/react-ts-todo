import * as React from 'react';

export interface EnvironementContextType {
    maximumTodo: number,
    incrementMaximumTodo: () => void    
}

export const EnvironmentContext = React.createContext({} as EnvironementContextType);

const StoreEnvironment = (props: { children: React.ReactChild }) => {
    const [maximumTodo, setMaximumTodo] = React.useState(10);
    
    const incrementMaximumTodo = () => {
        setMaximumTodo(maximumTodo + 1);
    }

    return (
        <EnvironmentContext.Provider value={{
            maximumTodo,
            incrementMaximumTodo
        }}>
            {props.children}
        </EnvironmentContext.Provider>
    )
}

export default StoreEnvironment;