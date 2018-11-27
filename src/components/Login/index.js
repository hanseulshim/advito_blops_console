import React, { Component } from 'react';
import Button from 'components/common/Button';
import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  updateEmail = event => {
    this.setState({ email: event.target.value });
  };
  updatePassword = event => {
    this.setState({ password: event.target.value });
  };
  authenticateUser = event => {
    this.props.authenticateUser(this.state.password);
    event.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="password-container">
        <form onSubmit={this.authenticateUser}>
          <input placeholder="Email" type="text" value={email} onChange={this.updateEmail} />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.updatePassword}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
