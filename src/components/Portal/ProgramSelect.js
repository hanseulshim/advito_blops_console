import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Icon from 'components/common/Icon';

const Container = styled.div`
  display: flex;
  margin-top: 2em;
  justify-content: space-between;
`;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewIcon = styled(Icon)`
  color: ${props => props.theme.alabaster};
  background: ${props => props.theme.tradewind};
  padding: 0.5em 0.75em;
  font-size: 750%;
  border-radius: 20px;
`;

const Title = styled.span`
  font-size: 125%;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0.5em;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const ListIcon = styled(Icon)`
  padding: 0.5em;
  font-size: 200%;
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.tradewind};
  border-radius: 15px;
  color: ${props => props.theme.tradewind};
  margin-right: 0.5em;
`;

const generateList = (view, index) => (
  <List key={index}>
    {view.domo ? (
      <a href={view.link} target="blank">
        <ListIcon className={view.icon} />
      </a>
    ) : (
      <Link to={`${view.link}`}>
        <ListIcon className={view.icon} />
      </Link>
    )}
    <span>{view.title}</span>
  </List>
);

const ProgramSelect = () => (
  <Container>
    <Query
      query={gql`
        {
          viewList {
            title
            icon
            list {
              title
              icon
              domo
              link
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.viewList.map((view, index) => (
          <View key={index}>
            <IconContainer>
              <ViewIcon className={view.icon} />
              <Title>{view.title}</Title>
            </IconContainer>
            <ListContainer>{view.list.map(generateList)}</ListContainer>
          </View>
        ));
      }}
    </Query>
  </Container>
);

export default ProgramSelect;
