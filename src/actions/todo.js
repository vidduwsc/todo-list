export const addNewTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const deleteTodoCompleted = () => {
  return {
    type: "DELETE_TODO_COMPLETED",
  };
};

export const updateTodo = (data) => {
  return {
    type: "UPDATE_TODO",
    payload: data,
  };
};

export const setCompleted = (id) => {
  return {
    type: "SET_COMPLETED",
    payload: id,
  };
};
