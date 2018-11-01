import React, { Component } from 'react';
import './App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Password from './components/Password';

class App extends Component {
  state = {
    passwordValid: false,
  }
  checkPassword = (password) => {
    const passwordValid = password === 'blops2018';
    this.setState({ passwordValid });
  }
  render() {
    const passwordValid = this.state.passwordValid;
    return (
      <div id="app">
        {
          passwordValid ?
          <>
            <Sidebar />
            <Content />
          </> :
          <Password checkPassword={this.checkPassword} />
        }
        {/* <>
          <Sidebar />
          <Content />
        </> */}
      </div>
    );
  }
}

export default App;
