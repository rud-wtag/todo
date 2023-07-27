import { v4 as uuidv4 } from 'uuid';
import { actionTypes } from 'redux/constants/ActionTypes';
import { INITIAL_TASK } from 'utils/constants';

export const addTodo = (title) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      ...INITIAL_TASK,
      id: uuidv4(),
      title,
      createdAt: new Date()
    }
  };
};

export const editTodo = (task) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload: task
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

export const setTodoComplete = (taskId) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: { taskId: taskId, completedAt: new Date() }
  };
};

export const setEditMode = (taskId) => {
  return {
    type: actionTypes.SET_EDIT,
    payload: taskId
  };
};

export const nextPage = (todos) => {
  return {
    type: actionTypes.NEXT_PAGE,
    payload: todos
  };
};

export const toast = (toastState) => {
  return {
    type: actionTypes.TOAST_MESSAGE,
    payload: toastState
  };
};
