import { actionTypes } from 'redux/constants/ActionTypes';
const { ADD_TODO, SET_ADD_TASK, DELETE_TODO } = actionTypes;
const initialState = {
  isAddingTask: false,
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  let newList;
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [{ ...action.payload }, ...state.todos]
      };
    case SET_ADD_TASK:
      return {
        ...state,
        isAddingTask: action.payload
      };
    case DELETE_TODO:
      newList = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newList
      };
    default:
      return state;
  }
};
