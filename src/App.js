import React, { Component } from 'react';
import './App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
