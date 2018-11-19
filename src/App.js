import React, { Component } from 'react';
import './App.scss';
// import Password from './components/Password';
import Portal from './components/Portal';

class App extends Component {
  state = {
    passwordValid: false,
  };
  checkPassword = password => {
    const passwordValid = password === 'blops2018';
    this.setState({ passwordValid });
  };
  render() {
    // const passwordValid = this.state.passwordValid;
    return (
      <div id="app">
        {/* {
          passwordValid ?
          <>
            <Sidebar />
            <Content />
          </> :
          <Password checkPassword={this.checkPassword} />
        } */}
        <Portal />
      </div>
    );
  }
}

export default App;
