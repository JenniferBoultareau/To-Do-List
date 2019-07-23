const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_TODOS': {
      return action.payload;
    }
    default:
      return state;
  }
};  

export default addTodoReducer;