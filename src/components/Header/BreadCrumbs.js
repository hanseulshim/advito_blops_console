import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import ViewContext from 'components/context/ViewContext';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  margin-bottom: ${props => props.theme.verticalSpace};
`;

const Spacer = styled.div`
  margin: 0 0.5em;
`;

const Text = styled.div`
  color: initial;
`;

const BackTo = styled(Text)`
  color: ${props => props.theme.treePoppy};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.treePoppy};
  }
`;

const getPrevious = (path, view) => {
  if (path === '/travel') {
    return view === 'dashboard' ? 'Console' : 'Travel Manager Dashboard';
  } else {
    return view === 'dashboard' ? 'Console' : 'Executive Dashboard';
  }
};

const BreadCrumbs = ({ location }) => (
  <ViewContext.Consumer>
    {({ view, changeView }) => (
      <Container>
        <Link replace to={view === 'dashboard' ? '/' : location.pathname}>
          <BackTo onClick={() => changeView('dashboard')}>
            {'«'} Back to {getPrevious(location.pathname, view)}
          </BackTo>
        </Link>
        <Spacer>|</Spacer>
        <Text>{view === 'dashboard' ? 'Travel Manager Dashboard' : view}</Text>
      </Container>
    )}
  </ViewContext.Consumer>
);

export default withRouter(BreadCrumbs);
