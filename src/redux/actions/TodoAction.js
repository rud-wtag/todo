import { actionTypes } from 'redux/constants/ActionTypes';
import { getDate, getUid } from 'utils/helpers';
import { INITIAL_TASK } from 'utils/constants';

export const addTodo = (taskDetails) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      ...INITIAL_TASK,
      id: getUid(),
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
    payload: { taskId: taskId, completedAt: getDate() }
  };
};

export const setEditing = (taskId) => {
  return {
    type: actionTypes.SET_EDIT,
    payload: taskId
  };
};
