import React from 'react';
import moment from 'moment-timezone';
import advito_logo from 'assets/advito_logo.png';

const Header = () => {
  const newYork = moment().tz("America/New_York");
  const london = moment().tz("Europe/London");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={advito_logo} alt="advito logo" />
      </div>
      <div className="time-support-container">
        <div className="time-container">
          <div>
            <span className="time">{newYork.format('h:m')}</span>
            <span className="hour">{newYork.format('A')}</span>
          </div>
          <span className="location">Washington, DC</span>
        </div>
        <div className="time-container">
          <div>
            <span className="time">{london.format('h:m')}</span>
            <span className="hour">{london.format('A')}</span>
          </div>
          <span className="location">London, UK</span>
        </div>
        <div className="icon-container">
          <i className="far fa-comment-alt icon"/>
          <span>Ask Addy</span>
        </div>
      </div>
    </div>
  );
}

export default Header;