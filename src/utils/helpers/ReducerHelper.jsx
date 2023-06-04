export const deleteTask = (todos, payload) => {
  const newList = todos.filter((todo) => todo.id !== payload);
  return newList;
};
