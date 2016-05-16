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

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
