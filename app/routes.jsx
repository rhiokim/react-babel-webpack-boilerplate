import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'containers/App';
import Home from 'containers/Home';
// import Users from 'containers/Users';
import Users from 'components/Users';
// import Articles from 'containers/Articles';
import Articles from 'components/Articles';
import Article from 'components/Article';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/users" component={Users}/>
    <Route path="/posts" component={Articles}/>
    <Route path="/posts/:id" component={Article}/>
  </Route>
);
