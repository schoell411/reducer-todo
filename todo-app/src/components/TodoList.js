import React from 'react';

//components
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  return (
    <div>
      <TodoForm />
      <Todo />
    </div>
  )
}

export default TodoList;