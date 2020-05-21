import * as React from 'react';
import ButtonIncreaseMax from './ButtonIncreaseMax';


const TodoAdd = (props) => {
    const { todoContext } = props;
    const [todo, setTodo] = React.useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        todoContext.addTodos(todo);
        setTodo('');
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

    return (
        <form onSubmit={onSubmit} data-testid="frmTodoAdd">
            <input type="text" onChange={onChange} value={todo} data-testid="txtTodo" />            
            <button type="submit">Add</button>            
            <ButtonIncreaseMax />
        </form>
    )
}

export default TodoAdd;