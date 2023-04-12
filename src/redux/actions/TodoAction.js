import { actionTypes } from 'redux/constants/ActionTypes';
import { getDate, getUid } from 'utils/helpers';

export const addTodo = (taskDetails) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: getUid(),
      taskDetails: taskDetails,
      createdAt: getDate(),
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
