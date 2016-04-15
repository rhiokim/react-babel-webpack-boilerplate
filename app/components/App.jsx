import React from 'react';
import { Button } from './ui';
import Header from './Header';
import Footer from './Footer';

require('./App.css');
require('./Header.css');
require('./Footer.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick1.bind(this);
    this.handleClick2.bind(this);
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
          <h1>Appname: {props.name} <small>- version: {props.version}</small></h1>
          <Button value="Button1" onClick={this.handleClick1} /> <Button value="Button2" onClick={this.handleClick2} />
        </div>
        <Footer />
      </div>
    );
  }
}
