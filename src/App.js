//import packages
import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';

import './App.scss';
import Login from './components/Login';
import Portal from './components/Portal';
import Dashboard from './components/Dashboard';

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
      <div id="app">
        <Switch>
          <Route path="/" exact component={Portal} />
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
