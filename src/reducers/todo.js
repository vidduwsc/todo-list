const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const initialState = {
  list: todoList,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case "DELETE_TODO": {
      const newList = [...state.list].filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        list: newList,
      };
    }

    case "DELETE_TODO_COMPLETED": {
      const newList = [...state.list].filter((todo) => {
        return !todo.completed;
      });
      return {
        ...state,
        list: newList,
      };
    }

    case "UPDATE_TODO": {
      const newList = [...state.list];
      newList.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      });
      return {
        ...state,
        list: newList,
      };
    }

    case "SET_COMPLETED": {
      const newList = [...state.list];
      newList.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });

      return {
        ...state,
        list: newList,
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
