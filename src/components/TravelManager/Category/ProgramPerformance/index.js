import React, { Component } from 'react';
import Home from './Home';

class ProgramPerformance extends Component {
  state = { view: 'home' };
  render() {
    return <Home />;
  }
}

export default ProgramPerformance;
