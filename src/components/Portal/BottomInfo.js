import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { PRODUCT_EVENT_LIST } from 'components/graphql/query';
import { Title } from 'components/common/Typography';
import Button from 'components/common/Button';
import Loader from 'components/common/Loader';

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
    <Query query={PRODUCT_EVENT_LIST}>
      {({ data: { productEventList }, loading }) =>
        loading ? (
          <Loader />
        ) : (
          productEventList.map((event, index) => (
            <Info key={index}>
              <Image
                src={require(`assets/icons/${event.icon}`)}
                alt="bottom-icon"
                disabled={event.disabled}
              />
              <TextContainer>
                <Title>{event.title}</Title>
                <Description>{event.description}</Description>
                {event.button && <Button spaceTop text={event.button} />}
              </TextContainer>
            </Info>
          ))
        )
      }
    </Query>
  </Container>
);

export default BottomInfo;
