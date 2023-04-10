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
export const setIsAddingTask = (isAddingTask) => {
  return {
    type: actionTypes.SET_ADD_TASK,
    payload: isAddingTask
  };
};
