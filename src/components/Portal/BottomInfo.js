import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Icon from 'components/common/Icon';
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
  background: ${props => props.theme.alto};
  border-radius: 15px;
  margin-right: 0.25em;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-weight: 700;
  margin-bottom: 0.75em;
`;

export default () => (
  <Container>
    <Query
      query={gql`
        {
          infoList {
            title
            icon
            button
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.infoList.map((view, index) => (
          <Info key={index}>
            <InfoIcon className={view.icon} />
            <Text>
              <Title>{view.title}</Title>
              <Button text={view.button} />
            </Text>
          </Info>
        ));
      }}
    </Query>
  </Container>
);
