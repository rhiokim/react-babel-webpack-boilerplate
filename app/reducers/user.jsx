const userInitialState = {
  users: []
};

export default (state = userInitialState, action) => {
  switch (action.type) {
  case 'GET_USERS': {
    const newState = Object.assign({}, state);
    newState.users = action.users;
    return newState;
  }
  default: {
    return state;
  }
  }
};
