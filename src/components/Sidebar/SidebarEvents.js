import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Icon from 'components/common/Icon';

const Container = styled.div`
  margin: 5em 0;
`;

const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
`;

const EventConainer = styled.div`
  display: flex;
  align-items: center;
`;

const EventIcon = styled(Icon)`
  font-size: 1.5em;
  color: ${props => props.theme.tradewind};
  padding: 0.75em;
  border: ${props => props.round && `1px solid ${props.theme.tradewind}`};
  border-radius: ${props => props.round && '50%'};
  margin: ${props => props.round && '0.75em 1em 0.75em 0'};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  margin-bottom: ${props => !props.secondary && '0.5em'};
  font-size: ${props => !props.secondary && '1.2em'};
  color: ${props => props.secondary && props.theme.boulder};
`;

const createIconRows = data =>
  data.map((obj, index) => (
    <EventConainer key={index}>
      <EventIcon round={!obj.alert} className={obj.icon} />
      <HeaderContainer>
        {obj.header && <Header>{obj.header}</Header>}
        {obj.secondaryHeader && <Header secondary>{obj.secondaryHeader}</Header>}
      </HeaderContainer>
    </EventConainer>
  ));

export default ({ data, title }) => (
  <Container>
    <TitleContainer>
      <Title>{title}</Title>
      <Button spaceLeft text="view all" />
    </TitleContainer>
    {createIconRows(data)}
  </Container>
);
