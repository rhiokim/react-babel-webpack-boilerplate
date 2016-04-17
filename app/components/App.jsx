import React from 'react';
import store from 'store';
import { Button } from './ui';
import Header from './Header';
import Footer from './Footer';

import '../assets/sass/main.scss';
require('./App.css');
require('./Header.css');
require('./Footer.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick1.bind(this);
    this.handleClick2.bind(this);

    this.state = {
      totalUserCount: 0
    };
  }

  componentWillMount() {
    store.subscribe(() => {
      const currStore = store.getState();
      this.setState({ totalUserCount: currStore.userReducer.users.length });
    });
  }

  handleClick1() {
    // alert('Clicked Button1');
  }

  handleClick2() {
    // alert('Clicked Button2');
  }

  render() {
    const props = {...this.props};

    return (
      <div>
        <Header />
        <div>
          <h1 className="success">Appname: {props.name} <small>- version: {props.version}</small></h1>
          <div>Total User Count: {this.state.totalUserCount}</div>
          <Button value="Button1" onClick={this.handleClick1} /> <Button value="Button2" onClick={this.handleClick2} />
        </div>

        <div className="route">
          <h2> Route Area </h2>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
