import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducers = combineReducers({
  userReducer: userReducer
});

export default createStoreWithMiddleware(reducers);
