import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Icon from 'components/common/Icon';
import { Title } from 'components/common/Typography';
import Button from 'components/common/Button';

const Container = styled.div`
  margin-top: 7em;
  display: flex;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4em;
`;

const InfoIcon = styled(Icon)`
  font-size: 400%;
  padding: 0.5em 0.75em;
  color: ${props => props.theme.alabaster};
  background: ${props => props.theme.pumice};
  border-radius: 15px;
  margin-right: 0.25em;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const query = `
{
  infoList {
    title
    icon
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
            <InfoIcon className={view.icon} />
            <TextContainer>
              <Title>{view.title}</Title>
              <Button spaceTop text={view.button} />
            </TextContainer>
          </Info>
        ))
      }
    </GraphQL>
  </Container>
);

export default BottomInfo;
