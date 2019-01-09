import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { BOTTOM_INFO } from 'components/graphql/query';
import { Title } from 'components/common/Typography';
import Button from 'components/common/Button';

const Container = styled.div`
  padding: 0 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Info = styled.div`
  margin-top: ${props => props.theme.verticalSpace};
  display: flex;
  flex: 0 45%;
  align-items: flex-start;
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

const BottomInfo = () => (
  <Container>
    <GraphQL query={BOTTOM_INFO} name="infoData">
      {({ data }) =>
        data.map((info, index) => (
          <Info key={index}>
            <Image
              src={require(`assets/icons/${info.icon}`)}
              alt="bottom-icon"
              disabled={info.disabled}
            />
            <TextContainer>
              <Title>{info.title}</Title>
              <Description>{info.description}</Description>
              {info.button && <Button spaceTop text={info.button} />}
            </TextContainer>
          </Info>
        ))
      }
    </GraphQL>
  </Container>
);

export default BottomInfo;
