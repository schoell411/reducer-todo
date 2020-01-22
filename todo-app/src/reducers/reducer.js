import React, { useState, useReducer } from 'react';

const todo = 
  [
//     {
//   item: '',
//   completed: false,
//   id: ''
// }
]

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM' :
      return [
        ...state, { item: action.payload, id: Date.now(), completed: false}
      ];
      case 'TOGGLE_COMPLETED' :
        return state.map(todo => {
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed};
            } else return todo;
          });
      case 'CLEAR' :
        return state.filter(todo => !todo.completed);
      default : return state;
  }
};

export { todo };
export { todoReducer};
