const viewReducer = (state = 'Formulaire', action) => {
  switch (action.type) {
    case 'SWITCH':
      return action.payload;
    default:
      return state;
  }
};

export default viewReducer;