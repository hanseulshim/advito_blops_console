import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import theme from 'styles/variables';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import UserContext from 'components/context/UserContext';
import ViewContext from 'components/context/ViewContext';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Portal from './components/Portal';
import TravelManager from './components/TravelManager';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    background: ${props => props.theme.alabaster};
    font-weight: lighter;
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
  position: ${props => !props.login && 'relative'};
`;

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Main component={Component} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class App extends Component {
  state = { authenticated: false, view: 'dashboard' };
  authenticateUser = event => {
    this.setState({ authenticated: event.target.password.value === 'blops2018' });
    event.preventDefault();
  };
  changeView = view => {
    this.setState({ view });
  };
  render() {
    const { authenticated, view } = this.state;
    const { location } = this.props;
    return (
      <UserContext.Provider value={{ authenticateUser: this.authenticateUser, authenticated }}>
        <ViewContext.Provider value={{ changeView: this.changeView, view }}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Container login={location.pathname === '/login'}>
                <GlobalStyle />
                <Route path="/login" component={Login} />
                <Sidebar />
                <PrivateRoute path="/" exact component={Portal} authenticated={authenticated} />
                <PrivateRoute
                  path="/travel"
                  exact
                  component={TravelManager}
                  authenticated={authenticated}
                />
              </Container>
            </Switch>
          </ThemeProvider>
        </ViewContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
