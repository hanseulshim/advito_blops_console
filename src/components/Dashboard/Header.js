import React from 'react';
import styled from 'styled-components';
import BackButton from 'components/common/BackButton';
import advito_logo from 'assets/advito_logo.png';
import { Link } from 'react-router-dom';

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
    <Link to="/">
      <BackButton />
    </Link>
    <img src={advito_logo} alt="advito analytics" />
  </Header>
);
