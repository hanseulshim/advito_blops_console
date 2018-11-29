import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  margin-top: 200px;
  background: ${props => props.theme.tradewind};
  padding: 3em 4em;
  width: 300px;
  border-radius: 5px;
`;

const FormText = styled.input`
  padding: 1em;
  margin: 0.75em 0;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;

const Submit = styled.input`
  background-color: ${props => props.theme.rajah};
  color: white;
  padding: 1em;
  margin-top: 2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

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
      <Container>
        <form onSubmit={this.authenticateUser}>
          <FormText placeholder="Email" type="text" value={email} onChange={this.updateEmail} />
          <FormText
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.updatePassword}
          />
          <Submit type="submit" value="Login" />
        </form>
      </Container>
    );
  }
}

export default Login;
