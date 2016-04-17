import React, { Component } from 'react';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age } = this.props;

    return (
      <div className="userItem">
        {name}: {age}
      </div>
    );
  }
}
