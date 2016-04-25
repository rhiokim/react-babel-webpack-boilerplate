export default (state, action) => {
  switch (action.type) {
  case 'REQUEST_USERS':
    state = Object.assign({}, state, {
      isFetching: true
    });
    break;
  case 'RECEIVE_USERS':
    state = Object.assign({}, state, {
      isFetching: false,
      users: action.users
    });
    break;
  default:
    break;
  }

  return state;
};
