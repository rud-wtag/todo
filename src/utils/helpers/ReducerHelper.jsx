import { TASKS_PER_PAGE } from 'utils/constants';

export const deleteTask = (todos, payload) => {
  return todos.filter((todo) => todo.id !== payload);
};

export const completeTask = (todos, payload) => {
  const newList = todos.map((todo) => {
    if (todo.id === payload.taskId) {
      return {
        ...todo,
        completedAt: payload.completedAt
      };
    }
    return todo;
  });
  return newList;
};

export const editTask = (todos, task) => {
  const newList = todos.map((todo) => {
    if (todo.id === task.taskId) {
      return {
        ...todo,
        taskDetails: task.taskDetails
      };
    }
    return todo;
  });
  return newList;
};

export const setEditMode = (todos, task) => {
  const newList = todos.map((todo) => {
    if (todo.id === task.taskId) {
      return {
        ...todo,
        isEditMode: task.isEditMode
      };
    }
    return todo;
  });
  return newList;
};

export const nextPage = (todos, currentPage) => {
  const indexOfLastTask = currentPage * TASKS_PER_PAGE;

  if (todos.length > indexOfLastTask) return currentPage + 1;
  return 1;
};

export const paginate = (tasks, currentPage) => {
  const indexOfLastTask = currentPage * TASKS_PER_PAGE;

  return tasks.slice(0, indexOfLastTask);
};
