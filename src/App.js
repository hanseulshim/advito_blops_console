import React, { Component } from 'react';
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
        {passwordValid ? <Portal /> : <Login authenticateUser={this.authenticateUser} />}
        {/* <Portal /> */}
        {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
