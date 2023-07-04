import { actionTypes } from 'redux/constants/ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (taskDetails) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: uuidv4(),
      taskDetails: taskDetails,
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
