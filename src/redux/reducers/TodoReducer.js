import { actionTypes } from 'redux/constants/ActionTypes';
import { deleteTask } from 'utils/helpers/ReducerHelper';

const { ADD_TODO, SET_ADD_TASK, DELETE_TODO } = actionTypes;
const initialState = {
  isNewTaskRequested: false,
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
        isNewTaskRequested: action.payload
      };

    case DELETE_TODO:
      newList = deleteTask(state.todos, action.payload);
      return {
        ...state,
        todos: newList
      };

    default:
      return state;
  }
};
