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
