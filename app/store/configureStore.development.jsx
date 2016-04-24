import {createStore, applyMiddleware, compose} from 'redux';
import {persistState} from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from 'reducers';
import DevTools from 'DevTools';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  DevTools.instrument(),
  persistState(
    window.location.href.match(/[?&]_k=([^&]+)\b/)
  )
);

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
