import React from 'react';

const Todo = ({ todo, dispatch }) => {
  
  const toggleCompleted = () => {
    dispatch({
        type: 'TOGGLE_COMPLETED',
        payload: todo.id
    });
  };

  return (
    <div onClick={toggleCompleted}>
      <h3>{todo.item}</h3>
    </div>
  )
}

export default Todo;