import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
import { Title } from 'components/common/Typography';
import UserContext from 'components/context/UserContext';
import Shayan from 'assets/shayan.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  img {
    border-radius: 50%;
    width: 25%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 0.5em;
`;

const CogIcon = styled(Icon)`
  color: ${props => props.theme.tradewind};
  margin-left: 0.25em;
`;

const SidebarUserInfo = () => (
  <UserContext.Consumer>
    {({ user }) => (
      <Container>
        <TitleContainer>
          <img src={Shayan} alt="avatar" />
          <CogIcon className="fas fa-cog" />
        </TitleContainer>
        <Title>{user.displayName}</Title>
      </Container>
    )}
  </UserContext.Consumer>
);

export default SidebarUserInfo;
