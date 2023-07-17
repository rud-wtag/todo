import { actionTypes } from 'redux/constants/ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (title) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: uuidv4(),
      title,
      createdAt: new Date(),
      completedAt: null
    }
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: todoId
  };
};

export const setIsNewTaskRequested = (isNewTaskRequested) => {
  return {
    type: actionTypes.SET_ADD_TASK,
    payload: isNewTaskRequested
  };
};
