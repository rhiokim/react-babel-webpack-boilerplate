import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import reducers from 'reducers';

const router = routerMiddleware(hashHistory);

const rootReducer = combineReducers({
  reducers,
  routerReducer,
});

const enhancer = applyMiddleware(thunk, router);

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
