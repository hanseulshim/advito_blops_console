import React from 'react';
import styled from 'styled-components';
import Shayan from 'assets/shayan.jpeg';

const Container = styled.div`
  font-size: 1.4em;
  text-align: center;
  img {
    border-radius: 50%;
    width: 25%;
  }
`;

const Icon = styled.i`
  color: ${props => props.theme.tradewind};
  margin-left: 0.25em;
`;

const SidebarUserInfo = () => {
  return (
    <Container>
      <img src={Shayan} alt="avatar" />
      <div>
        <span>Shayan Kheradmand</span>
        <Icon className="fas fa-cog" />
      </div>
    </Container>
  );
};

export default SidebarUserInfo;
