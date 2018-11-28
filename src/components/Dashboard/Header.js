import React from 'react';
import BackButton from 'components/common/BackButton';
import advito_analytics from 'assets/advito_analytics.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><BackButton /></Link>
      <img className="header-logo" src={advito_analytics} alt="advito analytics" />
    </div>
  );
};

export default Header;
