import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import theme from 'styles/variables';
import GlobalStyle from 'styles/GlobalStyle';
import UserContext from 'components/context/UserContext';
import Login from './components/Login';
import Portal from './components/Portal';
import TravelManager from './components/TravelManager';
import Executive from './components/Executive';
import User from './components/User';
import { setUser, validateUser, removeUser } from './components/graphql/helper';

const PrivateRoute = ({ authenticated, component: Component, collapse, ...rest }) => (
  <Route {...rest} render={props => (authenticated ? <Component /> : <Redirect to="/login" />)} />
);

class App extends Component {
  constructor() {
    super();
    const userCheck = validateUser();
    this.state = { authenticated: userCheck.authenticated, user: userCheck.user };
  }
  removeUser = () => {
    removeUser();
    this.setState({ authenticated: false, user: {} });
  };
  setUser = user => {
    this.setState({ authenticated: true, user });
    setUser(user);
  };
  render() {
    const { authenticated, user } = this.state;
    return (
      <UserContext.Provider
        value={{ setUser: this.setUser, authenticated, user, removeUser: this.removeUser }}
      >
        <ThemeProvider theme={theme}>
          <Switch>
            <>
              <GlobalStyle />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" exact component={Portal} authenticated={authenticated} />
              <PrivateRoute path="/user-profile" component={User} authenticated={authenticated} />
              <PrivateRoute path="/client-setup" component={User} authenticated={authenticated} />
              <PrivateRoute path="/user-access" component={User} authenticated={authenticated} />
              <PrivateRoute
                path="/travel"
                component={TravelManager}
                authenticated={authenticated}
              />
              <PrivateRoute path="/executive" component={Executive} authenticated={authenticated} />
            </>
          </Switch>
        </ThemeProvider>
      </UserContext.Provider>
    );
  }
}

export default App;
