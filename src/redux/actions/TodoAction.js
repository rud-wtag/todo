import { actionTypes } from 'redux/constants/ActionTypes';
import { INITIAL_TASK } from 'utils/constants';
import { getDate } from 'utils/helpers';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (taskDetails) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      ...INITIAL_TASK,
      id: uuidv4(),
      taskDetails: taskDetails,
      createdAt: getDate()
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

export const setIsAddingTask = (isAddingTask) => {
  return {
    type: actionTypes.SET_ADD_TASK,
    payload: isAddingTask
  };
};

export const setTOComplete = (taskId) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: { taskId: taskId, completedAt: new Date() }
  };
};

export const setEditing = (taskId) => {
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
