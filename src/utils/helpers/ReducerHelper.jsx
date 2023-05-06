import { filterActionTypes } from 'redux/constants/ActionTypes';
const { ALL, COMPLETE, INCOMPLETE } = filterActionTypes;

export const deleteTask = (todos, payload) => {
  const newList = todos.filter((todo) => todo.id !== payload);
  return newList;
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
        editing: task.editing
      };
    }
    return todo;
  });
  return newList;
};
export const nextPage = (todos, currentPage) => {
  const tasksPerPage = 9;
  const indexOfLastTask = currentPage * tasksPerPage;
  console.log(todos.length, currentPage);
  if (todos.length > indexOfLastTask) return currentPage + 1;
  return 1;
};

const filterTasks = (filterState = ALL, tasks) => {
  switch (filterState) {
    case ALL:
      return tasks;
    case COMPLETE:
      return tasks.filter((task) => {
        if (task.completedAt !== null) return task;
      });
    case INCOMPLETE:
      return tasks.filter((task) => {
        if (task.completedAt === null) return task;
      });
    default:
      return tasks;
  }
};

const searchTasks = (tasks, query) => {
  return tasks.filter((task) => task.taskDetails.includes(query));
};

export const paginate = (tasks, currentPage) => {
  const tasksPerPage = 9;
  const indexOfLastTask = currentPage * tasksPerPage;
  return tasks.slice(0, indexOfLastTask);
};

export const taskManipulation = (tasks, filter, search) => {
  let todos = filterTasks(filter.filterState, tasks);
  if (search.query) {
    todos = searchTasks(tasks, search.query);
  }
  return todos;
};
