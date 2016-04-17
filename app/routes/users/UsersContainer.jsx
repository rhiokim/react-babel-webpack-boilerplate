import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { getUsers } from 'api/users';

class UsersContainer extends Component {
  constructor(props) {
    super(props);

    // this.state = { users: [] };
  }

  componentWillMount() {
    getUsers();
    // getUsers().then(response => {
    //   this.setState({
    //     users: response.data
    //   });
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  render() {
    return (
      // <Users users={this.state.users} />
      <Users {...this.props} />
    );
  }
}

const stateToProps = (state) => ({
  users: state.userReducer.users
});

const dispatchToProps = () => ({
  onClick: () => { console.log('user was click'); }
});

export default connect(stateToProps, dispatchToProps)(UsersContainer);
