import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { Title } from 'components/common/Typography';
import Button from 'components/common/Button';

const Container = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
`;

const Info = styled.div`
  display: flex;
  flex: 0 50%;
  align-items: flex-start;
  margin-top: 3em;
`;

const Image = styled.img`
  margin-right: 0.5em;
  cursor: ${props => !props.disabled && 'pointer'};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  margin-top: 0.25em;
`;

const query = `
{
  infoList {
    title
    icon
    description
    disabled
    button
  }
}
`;

const BottomInfo = () => (
  <Container>
    <GraphQL query={query}>
      {data =>
        data.infoList.map((view, index) => (
          <Info key={index}>
            <Image
              src={require(`assets/icons/${view.icon}`)}
              alt="bottom-icon"
              disabled={view.disabled}
            />
            <TextContainer>
              <Title>{view.title}</Title>
              <Description>{view.description}</Description>
              {view.button && <Button spaceTop text={view.button} />}
            </TextContainer>
          </Info>
        ))
      }
    </GraphQL>
  </Container>
);

export default BottomInfo;
