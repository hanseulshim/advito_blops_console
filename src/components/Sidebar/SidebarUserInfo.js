import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
import { Title } from 'components/common/Typography';
import Shayan from 'assets/shayan.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    width: 25%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 1em;
`;

const CogIcon = styled(Icon)`
  color: ${props => props.theme.tradewind};
  margin-left: 0.25em;
`;

const SidebarUserInfo = () => (
  <Container>
    <img src={Shayan} alt="avatar" />
    <TitleContainer>
      <Title>Shayan Kheradmand</Title>
      <CogIcon className="fas fa-cog" />
    </TitleContainer>
  </Container>
);

export default SidebarUserInfo;
