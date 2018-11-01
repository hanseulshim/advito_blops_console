import React, { Component } from 'react';
import './Password.scss';

class Password extends Component {
  state = {
    password: '',
  }
  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  checkPassword = (event) => {
    this.props.checkPassword(this.state.password);
    event.preventDefault();
  }
  render() {
    const password = this.state.password;
    return (
      <div className="password-container">
        <form onSubmit={this.checkPassword}>
          <input type="password" value={password} onChange={this.updatePassword} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Password;