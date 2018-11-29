//import packages
import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import theme from 'styles/variables';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Portal from './components/Portal';
import Dashboard from './components/Dashboard';

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

class App extends Component {
  state = {
    passwordValid: false,
  };
  authenticateUser = password => {
    const passwordValid = password === 'blops2018';
    this.setState({ passwordValid });
  };
  render() {
    const passwordValid = this.state.passwordValid;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Portal} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          {/* {passwordValid ? <Portal /> : <Login authenticateUser={this.authenticateUser} />} */}
          {/* <Portal /> */}
          {/* <Dashboard /> */}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
