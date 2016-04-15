import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const config = {
  version: '0.0.1',
  name: 'Hello World'
};

ReactDOM.render(
  <App {...config}/>,
  document.body.appendChild(document.createElement('div'))
);
