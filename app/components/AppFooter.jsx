import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FontIcon from 'react-md/lib/FontIcons';
import { FlatButton } from 'react-md/lib/Buttons';

const GITHUB_LINK = 'https://github.com/rhiokim/react-babel-webpack-boilerplate';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <footer className="react-doc-footer">
        <div className="container">
          <div className="contact">
            <h4 className="md-title">Contact</h4>
            <FlatButton primary label="Rhio Kim" href="mailto:rhio.kim@gmail.com" type={null}>
              <FontIcon>mail</FontIcon>
            </FlatButton>
          </div>
          <div className="contribute">
            <h4 className="md-title">Contributing</h4>
            <p className="md-body-2">
              This project is currently developed by a single person. Feel free
              to contribute!
            </p>
            <FlatButton secondary label="Github" href={GITHUB_LINK} type={null}>
              <FontIcon iconClassName="fa fa-github" />
            </FlatButton>
          </div>
        </div>
      </footer>
    );
  }
}
