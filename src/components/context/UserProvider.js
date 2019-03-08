import React, { Component } from 'react';
import { setUser, validateUser, removeUser } from 'components/graphql/helper';

export const UserContext = React.createContext('user');

class UserProvider extends Component {
  constructor(props) {
    super(props);
    const userCheck = validateUser();
    this.state = { authenticated: userCheck.authenticated, user: userCheck.user };
  }
  removeUser = () => {
    removeUser();
    this.setState({ authenticated: false, user: {} });
  };
  setUser = user => {
    setUser(user);
    this.setState({ authenticated: true, user });
  };
  render() {
    const { authenticated, user } = this.state;
    return (
      <UserContext.Provider
        value={{ setUser: this.setUser, authenticated, user, removeUser: this.removeUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
