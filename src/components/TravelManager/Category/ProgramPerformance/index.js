import React, { Component } from 'react';
import Home from './Home';
import HotelStory from './Story/HotelStory';
import AirStory from './Story/AirStory';

class ProgramPerformance extends Component {
  state = { view: 'air' };

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.view !== 'home' && this.state.view !== 'home') {
    //   this.setState({ view: 'home' });
    // }
  }

  changeView = view => {
    this.setState({ view });
  };

  render() {
    const { view } = this.state;
    return (
      (view === 'home' && <Home changeView={this.changeView} />) ||
      (view === 'hotel' && <HotelStory />) ||
      (view === 'air' && <AirStory />)
    );
  }
}

export default ProgramPerformance;
