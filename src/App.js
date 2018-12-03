import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import theme from 'styles/variables';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Portal from './components/Portal';
import Dashboard from './components/Dashboard';
import UserContext from 'components/context/UserContext';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background: ${props => props.theme.grayNurse};
    font-size: 16px;
    @media (max-width : 1500px){
      font-size: 15px;
    }
    @media (max-width : 1400px){
      font-size: 14px;
    }
    @media (max-width : 1336px){
      font-size: 13px;
    }
    @media (max-width : 1200px){
      font-size: 12px;
    }
    @media (max-width : 1024px){
      font-size: 11px;
    }
  }
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
`;

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (authenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

class App extends Component {
  state = { authenticated: false };
  authenticateUser = event => {
    this.setState({ authenticated: event.target.password.value === 'blops2018' });
    event.preventDefault();
  };
  render() {
    const authenticated = this.state.authenticated;
    return (
      <UserContext.Provider value={{ authenticateUser: this.authenticateUser, authenticated }}>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyle />
            <Switch>
              <PrivateRoute path="/" exact component={Portal} authenticated={authenticated} />
              <PrivateRoute
                path="/dashboard"
                exact
                component={Dashboard}
                authenticated={authenticated}
              />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </ThemeProvider>
      </UserContext.Provider>
    );
  }
}

export default App;
