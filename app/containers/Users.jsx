import React, {Component} from 'react';
// import {connect} from 'react-redux';

// import Users from 'components/users/Users';

class Users extends Component {

  componentWillMount() {
    // getUsers();
  }

  render() {
    return (
      // <Users users={this.state.users} />
      // <Users {...this.props}/>
      <h1>users</h1>
    );
  }
}

/*
const stateToProps = state => ({
  users: state.userReducer.users
});

const dispatchToProps = () => ({
  onClick: () => {
    console.log('user was click');
  }
});

export default connect(stateToProps, dispatchToProps)(UsersContainer);
*/

export default Users;
