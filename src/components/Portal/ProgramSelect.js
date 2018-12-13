import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { Link } from 'react-router-dom';
import Icon from 'components/common/Icon';
import analytics_active from 'assets/analytics_active.png';
import air_active from 'assets/air_active.png';
import hotel_active from 'assets/hotel_active.png';

const Container = styled.div`
  display: flex;
  margin-top: 2em;
  justify-content: space-between;
`;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1em;
  margin-left: ${props => props.first && 0};
  margin-right: ${props => props.last && 0};
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewIcon = styled.img`
  width: 100%;
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

const query = `
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
    <GraphQL query={query}>
      {data =>
        data.viewList.map((view, index) => (
          <View key={index} first={index === 0} last={index === data.viewList.length - 1}>
            <IconContainer>
              <ViewIcon
                src={
                  view.icon === 'analytics'
                    ? analytics_active
                    : view.icon === 'air'
                    ? air_active
                    : hotel_active
                }
                alt="view"
              />
              <Title>{view.title}</Title>
            </IconContainer>
            <ListContainer>{view.list.map(generateList)}</ListContainer>
          </View>
        ))
      }
    </GraphQL>
  </Container>
);

export default ProgramSelect;
