import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { PROGRAM_SELECT } from 'components/graphql/query';
import { Link } from 'react-router-dom';
import { SectionTitle } from 'components/common/Typography';

const Container = styled.div`
  display: flex;
  margin-top: 1.5em;
  justify-content: space-between;
`;

const View = styled.div`
  margin: 0 1em;
  margin-left: ${props => (props.first || props.last) && 0};
  margin-right: ${props => (props.first || props.last) && 0};
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  border-radius: 10px;
  flex: 1;
  overflow: hidden;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 2em;
  background: ${props => (props.disabled ? props.theme.pumice : props.theme.tradewind)};
`;

const ViewIcon = styled.div`
  display: flex;
`;

const SectionTitleFlex = styled(SectionTitle)`
  flex: 2;
  margin-left: 0.5em;
  color: ${props => props.theme.white};
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5em 2em;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const Image = styled.img`
  margin-right: 0.5em;
`;

const getLink = subView =>
  subView.domo ? (
    <a href={subView.link} target="blank">
      <Image src={require(`assets/icons/${subView.icon}`)} alt="product icon" />
    </a>
  ) : (
    <Link to={`${subView.link}`}>
      <Image src={require(`assets/icons/${subView.icon}`)} alt="product icon" />
    </Link>
  );

const generateList = view =>
  view.list.map((subView, index) => (
    <List key={index}>
      {view.disabled ? (
        <Image src={require(`assets/icons/${subView.icon}`)} alt="product icon" />
      ) : (
        getLink(subView)
      )}
      <span>{subView.title}</span>
    </List>
  ));

const ProgramSelect = () => (
  <Container>
    <GraphQL query={PROGRAM_SELECT}>
      {({ data }) =>
        data.viewData.map((view, index) => (
          <View key={index} first={index === 0} last={index === data.viewData.length - 1}>
            <IconContainer disabled={view.disabled}>
              <ViewIcon>
                <Image src={require(`assets/products/${view.icon}`)} alt="icon" />
              </ViewIcon>
              <SectionTitleFlex>{view.title}</SectionTitleFlex>
            </IconContainer>
            <ListContainer>{generateList(view)}</ListContainer>
          </View>
        ))
      }
    </GraphQL>
  </Container>
);

export default ProgramSelect;
