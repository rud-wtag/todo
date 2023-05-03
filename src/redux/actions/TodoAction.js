import { actionTypes } from 'redux/constants/ActionTypes';
import { getDate } from 'utils/helpers';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (taskDetails) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: uuidv4(),
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
