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
