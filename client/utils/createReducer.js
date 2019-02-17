const createReducer = (initialState, actionHandlers) => (state = initialState, action) => {
  const reduceFn = actionHandlers[action.type];
  if (reduceFn) {
    return reduceFn(state, action);
  }
  return state;
};

export default createReducer;
