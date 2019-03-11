import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import theme from 'styles/variables';
import GlobalStyle from 'styles/GlobalStyle';
import Login from './components/Login';
import Portal from './components/Portal';
import TravelManager from './components/TravelManager';
import Executive from './components/Executive';
import User from './components/User';
import { UserProvider, withUserContext } from 'components/context';

const PrivateRoute = withUserContext(
  ({ component: Component, collapse, context: {authenticated}, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => (authenticated ? <Component /> : <Redirect to="/login" />)}
      />
    );
  }
);

class App extends Component {
  render() {
    return (
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Switch>
            <>
              <GlobalStyle />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" exact component={Portal} />
              <PrivateRoute path="/user-profile" component={User} />
              <PrivateRoute path="/client-setup" component={User} />
              <PrivateRoute path="/user-access" component={User} />
              <PrivateRoute path="/travel" component={TravelManager} />
              <PrivateRoute path="/executive" component={Executive} />
            </>
          </Switch>
        </ThemeProvider>
      </UserProvider>
    );
  }
}

export default App;
