/* global __DEV__ */
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from 'routes';
import configureStore from 'store/configureStore';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'assets/css/main.css';
import 'assets/css/article.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const root = document.body.appendChild(document.createElement('div'));
const App = () =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>;

if (__DEV__) {
  const RedBox = require('redbox-react');
  try {
    render(<App />, root);
  } catch (e) {
    render(<RedBox error={e} />, root);
  }
} else {
  render(<App />, root);
}
