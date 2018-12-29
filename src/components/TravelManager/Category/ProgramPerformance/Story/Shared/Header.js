import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.spaced ? 'space-between' : null)};
  width: ${props => (props.width ? `${props.width}px` : null)};
`;

const BackButton = styled.i`
  border: 2px solid ${props => props.theme.tradewind};
  border-radius: 50%;
  padding: 0.5em;
  color: ${props => props.theme.tradewind};
  display: flex;
  justify-content: center;
  width: 0.75em;
  height: 0.75em;
  cursor: pointer;
  position: absolute;
  left: -50px;
`;

const Logo = () => {
  return (
    <FlexItem>
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fas fa-plane fa-stack-1x fa-inverse" />
      </span>
      <h2>Black Ops</h2>
    </FlexItem>
  );
};

const User = props => {
  return (
    <FlexItem spaced width={130}>
      <i className="fas fa-user" />
      <p>{props.user}</p>
      <i className="fas fa-angle-down" />
    </FlexItem>
  );
};

const Header = ({ user }) => {
  return (
    <Container>
      <BackButton className="fas fa-chevron-left" />
      <FlexItem>
        <Logo />
      </FlexItem>
      <User user={user} />
    </Container>
  );
};

export default Header;
