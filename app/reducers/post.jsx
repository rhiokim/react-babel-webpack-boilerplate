const postInitialState = {
  posts: []
};

export default (state = postInitialState, action) => {
  switch (action.type) {
  case 'GET_POSTS':
    const newState = Object.assign({}, state);
    newState.posts = action.posts;
    return newState;
  default:
    return state;
  }
};
