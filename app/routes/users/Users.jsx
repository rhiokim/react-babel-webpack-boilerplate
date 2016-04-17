import React, { Component } from 'react';

import UserItem from './components/UserItem';

export default class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <h3>Users</h3>
        <ul>
          { users.map((user) => {
            return (
              <UserItem key={user.id} {...user} />
            );
          })}
        </ul>
      </div>
    );
  }
}
