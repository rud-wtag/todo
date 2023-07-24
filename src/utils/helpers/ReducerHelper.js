export const deleteTask = (todos, payload) => {
  return todos.filter((todo) => todo.id !== payload);
};
