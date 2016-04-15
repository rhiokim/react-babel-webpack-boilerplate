import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Index from './routes/Index';

const config = {
  version: '0.0.1',
  name: 'Hello World'
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} {...config}>
      <IndexRoute component={Index} />
    </Route>
  </Router>,
  document.body.appendChild(document.createElement('div'))
);
