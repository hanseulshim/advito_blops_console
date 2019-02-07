import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import theme from 'styles/variables';
import GlobalStyle from 'styles/GlobalStyle';
import UserContext from 'components/context/UserContext';
import ViewContext from 'components/context/ViewContext';
import Login from './components/Login';
import Portal from './components/Portal';
import TravelManager from './components/TravelManager';
import Executive from './components/Executive';
import UserView from './components/User';
import { setUser, validateUser, removeUser } from './components/graphql/helper';

const PrivateRoute = ({ authenticated, component: Component, collapse, ...rest }) => (
  <Route {...rest} render={props => (authenticated ? <Component /> : <Redirect to="/login" />)} />
);

class App extends Component {
  state = { authenticated: false, view: 'dashboard', user: {} };
  componentDidMount() {
    const userCheck = validateUser();
    this.setState({ authenticated: userCheck.authenticated, user: userCheck.user });
  }
  removeUser = () => {
    removeUser();
    this.setState({ authenticated: false, user: {} });
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
                <PrivateRoute path="/user" component={UserView} authenticated={authenticated} />
                <PrivateRoute
                  path="/travel"
                  component={TravelManager}
                  authenticated={authenticated}
                />
                <PrivateRoute
                  path="/executive"
                  component={Executive}
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
