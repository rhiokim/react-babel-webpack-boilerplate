import article from './article';
import user from './user';

const defaultState = {
  counter: 0,
  users: [],
  articles: []
};

const reducers = (state = defaultState, action) => {
  state = article(state, action);
  state = user(state, action);

  // global reducer
  switch (action.type) {}

  return state;
};

export default reducers;
