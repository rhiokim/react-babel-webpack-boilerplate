import React, { Component } from 'react';

import UserItem from './components/UserItem';

export default class Users extends Component {
  render() {
    return (
      <div className="container">
        <h3>Users</h3>
        <UserItem name="Michael" age="33" />
        <UserItem name="Jay" age="32" />
        <UserItem name="Bread" age="31" />
      </div>
    );
  }
}
