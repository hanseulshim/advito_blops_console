import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import theme from 'styles/variables';
import GlobalStyle from 'styles/GlobalStyle';
import UserContext from 'components/context/UserContext';
import ViewContext from 'components/context/ViewContext';
import Login from './components/Login';
import Main from './components/Main';
import Portal from './components/Portal';
import TravelManager from './components/TravelManager';
import { setUser, validateUser, removeUser } from './components/graphql/helper';

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
  state = { authenticated: false, view: 'dashboard', user: {} };
  componentDidMount() {
    const userCheck = validateUser();
    this.setState({ authenticated: userCheck.authenticated, user: userCheck.user });
  }
  removeUser = () => {
    removeUser();
    this.setState({ authenticated: false, user: {} });
    window.location.reload();
  };
  setUser = user => {
    this.setState({ authenticated: true, user });
    setUser(user);
  };
  changeView = view => {
    this.setState({ view });
  };
  render() {
    const { authenticated, view, user } = this.state;
    return (
      <UserContext.Provider
        value={{ setUser: this.setUser, authenticated, user, removeUser: this.removeUser }}
      >
        <ViewContext.Provider value={{ changeView: this.changeView, view }}>
          <ThemeProvider theme={theme}>
            <Switch>
              <>
                <GlobalStyle />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" exact component={Portal} authenticated={authenticated} />
                <PrivateRoute
                  path="/travel"
                  exact
                  component={TravelManager}
                  authenticated={authenticated}
                />
              </>
            </Switch>
          </ThemeProvider>
        </ViewContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
