import React from 'react';

function Todo ({ todo, dispatch }) {
  
  const toggleCompleted = () => {
    dispatch({
        type: 'TOGGLE_COMPLETED',
        payload: todo.id
    });
  };

  return (
    <div 
      onClick={toggleCompleted} 
      className={`todo ${todo.completed ? 'completed' : ''}`}
    >
      <h3>{todo.item}</h3>
    </div>
  )
}

export default Todo;