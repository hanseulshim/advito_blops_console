import React from 'react';
import styled from 'styled-components';
import BackButton from 'components/common/BackButton';
import advito_analytics from 'assets/advito_analytics.png';

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2em;
  img {
    margin-left: 1em;
  }
`;

export default () => (
  <Header>
    <BackButton />
    <img src={advito_analytics} alt="advito analytics" />
  </Header>
);
