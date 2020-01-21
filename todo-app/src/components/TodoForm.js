import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {

  const [item, setItem] = useState('');

  const handleChanges = e => {
    setItem(e.target.value);
  }

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
    setItem('');
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: 'CLEAR'
    });
  }
  return (
    <div className="todoList">
      <form onSubmit={submitForm}>
        <input type='text' name='todo' onChange={handleChanges} placeholder='New Task'/>
        <button onClick={submitForm}>Submit</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;