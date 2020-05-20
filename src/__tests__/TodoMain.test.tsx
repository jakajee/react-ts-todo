import * as React from 'react';
import TodoMain from '../Todo/components/TodoMain';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import StoreEnvironment from '../Todo/contexts/EnvironmentContext';


describe("<TodoMain />", () => {
    window.alert = (value) => {
    } 

    let app: RenderResult;

    beforeEach(() => {
        app = render(
            <StoreEnvironment>
                <TodoMain />
            </StoreEnvironment>
        );
    })

    afterEach(() => {
        app.unmount();
    })

    it("first render must not contains any todo", () => {
        const { container } = app;
        expect(container.querySelectorAll('li').length).toEqual(0);
    })

    it("once added todo, it must contains new todo", async () => {
        const newTodo = 'test';
        const { container, findByTestId, queryAllByText } = app;

        const input = await findByTestId('txtTodo');
        fireEvent.change(input, { target: { value: newTodo } });
        
        const form = await findByTestId('frmTodoAdd')
        fireEvent.submit(form);
        
        expect(input).toHaveValue('');
        expect(queryAllByText(newTodo)).toHaveLength(1);       
        expect(container.querySelectorAll('li')).toHaveLength(1);
    })

    it("prevent add todo with empty text", async () => {
        const newTodo = '';
        const { findByTestId, container } = app;

        const input = await findByTestId('txtTodo');
        fireEvent.change(input, { target: { value: newTodo } });

        const form = await findByTestId('frmTodoAdd')
        fireEvent.submit(form);        

        expect(container.querySelectorAll('li')).toHaveLength(0);         
    })

    it("should has all added todo", async () => {
        const newTodo = 'test';
        const { container, findByTestId, queryAllByText } = app;
        
        const input = await findByTestId('txtTodo');
        const form = await findByTestId('frmTodoAdd');

        for(let i = 0; i < 10; i++) {
            fireEvent.change(input, { target: { value: newTodo } });
            fireEvent.submit(form);
        }

        expect(queryAllByText(newTodo)).toHaveLength(10);       
        expect(container.querySelectorAll('li')).toHaveLength(10);
    })

    it("should prevent added more than maximum todo", async () => {
        const newTodo = 'test';
        const { container, findByTestId, queryAllByText } = app;
        
        const input = await findByTestId('txtTodo');
        const form = await findByTestId('frmTodoAdd');

        for(let i = 0; i < 11; i++) {
            fireEvent.change(input, { target: { value: newTodo } });
            fireEvent.submit(form);
        }

        expect(queryAllByText(newTodo)).toHaveLength(10);       
        expect(container.querySelectorAll('li')).toHaveLength(10);
    })
})

