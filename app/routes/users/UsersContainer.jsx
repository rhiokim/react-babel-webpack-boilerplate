import React, { Component } from 'react';

import Users from './Users';
import { getUsers } from 'api/users';

export default class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentWillMount() {
    getUsers().then(response => {
      this.setState({
        users: response.data
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <Users users={this.state.users} />
    );
  }
}
