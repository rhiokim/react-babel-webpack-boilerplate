import React from 'react';
import {Button} from 'components/ui';
import Header from 'components/Header';
import Footer from 'components/Footer';

require('./App.css');

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
        <Header/>
        <div>
          <h1>Appname: {props.name} <small>- version: {props.version}</small></h1>
          <div>Total User Count: {this.state.totalUserCount}</div>
          <Button value="Button1" onClick={this.handleClick1}/> <Button value="Button2" onClick={this.handleClick2}/>
        </div>

        <div className="route">
          <h2> Route Area </h2>
          {this.props.children}
        </div>
        <Footer/>
        {
          (() => {
            if (process.env.NODE_ENV === 'development') {
              const DevTools = require('DevTools').default;
              return <DevTools/>;
            }
          })()
        }
      </div>
    );
  }
}
