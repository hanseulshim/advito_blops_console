import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import UserContext from 'components/context/UserContext';

const FormContainer = styled.div`
  margin-top: 1em;
  padding: 3em 4em;
  width: 15em;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const FormText = styled.input`
  padding: 1em;
  margin: 0.75em 0;
  border: none;
  box-sizing: border-box;
  width: 100%;
`;

const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

const Submit = styled.input`
  background-color: ${props => props.theme.treePoppy};
  color: white;
  padding: 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 10em;
`;

const Forgot = styled.span`
  font-size: 0.75em;
  color: ${props => props.theme.alabaster};
  margin-left: 1.5em;
`;

const query = `
{
  login(username: "treyottaway", password: "Password1")
  {
    statusCode
    body
    {
      success
      apicode
      apimessage
      apidataset
      {
        displayName
        clientId
        profilePicturePath
        sessionToken
      }
    }
  }
}
`;

class LoginForm extends Component {
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
  render() {
    const { email, password } = this.state;
    return (
      <UserContext.Consumer>
        {({ authenticated, authenticateUser }) =>
          !authenticated ? (
            <GraphQL query={query}>
              {({ data }) => (
                <FormContainer>
                  <Form onSubmit={authenticateUser}>
                    <FormText
                      placeholder="Login"
                      type="text"
                      value={email}
                      name="email"
                      onChange={this.updateEmail}
                    />
                    <FormText
                      placeholder="Password"
                      type="password"
                      value={password}
                      name="password"
                      onChange={this.updatePassword}
                    />
                    <SubmitContainer>
                      <Submit type="submit" value="Login" />
                      <Forgot>Forgot Password?</Forgot>
                    </SubmitContainer>
                  </Form>
                </FormContainer>
              )}
            </GraphQL>
          ) : (
            <Redirect to={'/'} />
          )
        }
      </UserContext.Consumer>
    );
  }
}

export default LoginForm;
