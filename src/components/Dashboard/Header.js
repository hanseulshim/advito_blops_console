import React from 'react';
import BackButton from 'components/common/BackButton';
import advito_analytics from 'assets/advito_analytics.png';

const Header = () => {
  return (
    <div className="header">
      <BackButton />
      <img className="header-logo" src={advito_analytics} alt="advito analytics" />
    </div>
  );
};

export default Header;
