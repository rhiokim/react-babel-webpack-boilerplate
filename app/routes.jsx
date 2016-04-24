import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'containers/App';
import Home from 'containers/Home';
import Users from 'containers/Users';
import Counter from 'containers/Counter';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/users" component={Users}/>
    <Route path="/counter" component={Counter}/>
  </Route>
);
