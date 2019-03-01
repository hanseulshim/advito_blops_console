import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import { LOGIN } from 'components/graphql/query';
import styled from 'styled-components';
import UserContext from 'components/context/UserContext';
import Modal from 'components/common/Modal';
import ForgotPassword from './ForgotPassword';
import LoginFail from './LoginFail';

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
  cursor: pointer;
`;

class LoginForm extends Component {
  state = {
    username: '',
    pwd: '',
    forgotPassword: false,
    loginFail: false,
    errorMessage: '',
  };
  updateUsername = event => {
    this.setState({ username: event.target.value });
  };
  updatePassword = event => {
    this.setState({ pwd: event.target.value });
  };

  toggleModal = key => {
    this.setState({
      [key]: !this.state[key],
    });
  };
  render() {
    const { username, pwd, forgotPassword, loginFail, errorMessage } = this.state;
    return (
      <UserContext.Consumer>
        {({ authenticated, setUser }) =>
          !authenticated ? (
            <ApolloConsumer>
              {client => (
                <div>
                  <FormContainer>
                    <Form
                      onSubmit={async event => {
                        event.preventDefault();
                        const { data } = await client.query({
                          query: LOGIN,
                          variables: { username, pwd },
                        });
                        if (data.login.statusCode === 200) {
                          const user = data.login.body.apidataset;
                          setUser(user);
                        } else {
                          this.setState({
                            errorMessage: data.login.body.apimessage,
                          });
                          this.toggleModal('loginFail');
                        }
                      }}
                    >
                      <FormText
                        placeholder="Login"
                        type="text"
                        value={username}
                        name="username"
                        onChange={this.updateUsername}
                      />
                      <FormText
                        placeholder="Password"
                        type="password"
                        value={pwd}
                        name="password"
                        onChange={this.updatePassword}
                      />
                      <SubmitContainer>
                        <Submit type="submit" value="Login" />
                        <Forgot onClick={() => this.toggleModal('forgotPassword')}>
                          Forgot Password?
                        </Forgot>
                      </SubmitContainer>
                    </Form>
                    <Modal
                      open={forgotPassword}
                      handleClose={() => this.toggleModal('forgotPassword')}
                    >
                      <ForgotPassword handleClose={() => this.toggleModal('forgotPassword')} />
                    </Modal>
                    <Modal
                      open={loginFail}
                      handleClose={() => this.toggleModal('loginFail')}
                      size="medium"
                    >
                      <LoginFail
                        handleClose={() => this.toggleModal('loginFail')}
                        errorMessage={errorMessage}
                      />
                    </Modal>
                  </FormContainer>
                </div>
              )}
            </ApolloConsumer>
          ) : (
            <Redirect to={'/'} />
          )
        }
      </UserContext.Consumer>
    );
  }
}

export default LoginForm;
