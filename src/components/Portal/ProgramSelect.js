import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { Link } from 'react-router-dom';
import Icon from 'components/common/Icon';
import { SectionTitle } from 'components/common/Typography';
import analytics_active from 'assets/analytics_active.png';
import air_active from 'assets/air_active.png';
import air_disabled from 'assets/air_disabled.png';
import hotel_active from 'assets/hotel_active.png';
import hotel_disabled from 'assets/hotel_disabled.png';

const Container = styled.div`
  display: flex;
  margin-top: 1.5em;
  justify-content: space-between;
`;

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1em;
  margin-left: ${props => props.first && 0};
  margin-right: ${props => props.last && 0};
  background: ${props => props.theme.white};
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewIcon = styled.img`
  width: 100%;
  margin-bottom: 0.5em;
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
  background: ${props => props.theme.white};
  border: 1px solid ${props => (props.disabled ? props.theme.pumice : props.theme.tradewind)};
  border-radius: 15px;
  color: ${props => (props.disabled ? props.theme.pumice : props.theme.tradewind)};
  margin-right: 0.5em;
`;

const query = `
{
  viewList {
    title
    icon
    disabled
    list {
      title
      icon
      domo
      link
    }
  }
}
`;

const getIcon = (icon, disabled) => {
  if (icon === 'air') {
    return disabled ? air_disabled : air_active;
  } else if (icon === 'hotel') {
    return disabled ? hotel_disabled : hotel_active;
  }
  return analytics_active;
};

const getLink = subView =>
  subView.domo ? (
    <a href={subView.link} target="blank">
      <ListIcon className={subView.icon} />
    </a>
  ) : (
    <Link to={`${subView.link}`}>
      <ListIcon className={subView.icon} />
    </Link>
  );

const generateList = view =>
  view.list.map((subView, index) => (
    <List key={index}>
      {view.disabled ? (
        <ListIcon className={subView.icon} disabled={view.disabled} />
      ) : (
        getLink(subView)
      )}
      <span>{subView.title}</span>
    </List>
  ));

const ProgramSelect = () => (
  <Container>
    <GraphQL query={query}>
      {data =>
        data.viewList.map((view, index) => (
          <View key={index} first={index === 0} last={index === data.viewList.length - 1}>
            <IconContainer>
              <ViewIcon src={getIcon(view.icon, view.disabled)} alt="view" />
              <SectionTitle>{view.title}</SectionTitle>
            </IconContainer>
            <ListContainer>{generateList(view)}</ListContainer>
          </View>
        ))
      }
    </GraphQL>
  </Container>
);

export default ProgramSelect;
