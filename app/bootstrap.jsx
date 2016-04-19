import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'components/App';
import Index from 'routes/Index';
import UsersContainer from 'routes/users/UsersContainer';

const config = {
  version: '0.0.1',
  name: 'Hello World'
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} {...config}>
        <IndexRoute component={Index} />
        <Route path="/users" component={UsersContainer} />
      </Route>
    </Router>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
