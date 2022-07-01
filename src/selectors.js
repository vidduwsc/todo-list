export const filterSelector = (state) => {
  return state.filter.option;
};

export const todoListSelector = (state) => {
  let option = filterSelector(state);
  let todosRemaining = state.todo.list;

  if (option === "completed") {
    todosRemaining = state.todo.list.filter((todo) => {
      return todo.completed;
    });
  }

  if (option === "todo") {
    todosRemaining = state.todo.list.filter((todo) => {
      return !todo.completed;
    });
  }

  return todosRemaining;
};
