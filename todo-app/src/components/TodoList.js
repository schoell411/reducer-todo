import React, { useReducer } from 'react';

// reducers
import { todoReducer, todo } from '../reducers/reducer';

// components
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    
    const [state, dispatch] = useReducer(todoReducer, todo);
    
    return (
        <div>
            <TodoForm dispatch={dispatch} />
            <h1>Today's Agenda</h1>
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
        </div>
    );
};

export default TodoList;