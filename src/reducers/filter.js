const initialState = {
  option: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_OPTION": {
      return {
        ...state,
        option: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
