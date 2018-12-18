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
  state = { authenticated: true, view: 'Program Performance' };
  authenticateUser = event => {
    this.setState({ authenticated: event.target.password.value === 'blops2018' });
    event.preventDefault();
  };
  changeView = view => {
    this.setState({ view });
  };
  render() {
    const { authenticated, view } = this.state;
    return (
      <UserContext.Provider value={{ authenticateUser: this.authenticateUser, authenticated }}>
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
