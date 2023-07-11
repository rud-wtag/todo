import { actionTypes } from 'redux/constants/ActionTypes';

const { ADD_TODO, SET_ADD_TASK } = actionTypes;
const initialState = {
  isNewTaskRequested: false,
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [{ ...action.payload }, ...state.todos]
      };
    case SET_ADD_TASK:
      return {
        ...state,
        isNewTaskRequested: action.payload
      };
    default:
      return state;
  }
};
