import React, { Component } from 'react';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email } = this.props;

    return (
      <li onClick={this.props.onClick}>{name}: {email}</li>
    );
  }
}
