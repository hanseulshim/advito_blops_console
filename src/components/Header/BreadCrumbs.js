import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import ViewContext from 'components/context/ViewContext';
import Icon from 'components/common/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

const NavIcon = styled(Icon)`
  margin-right: 0.5em;
`;

const Text = styled.div`
  margin-right: 0.5em;
  cursor: pointer;
`;

const BreadCrumbs = ({ location }) => (
  <ViewContext.Consumer>
    {({ view, changeView }) => (
      <Container>
        <Link to={'/'}>
          <Text onClick={() => changeView('dashboard')}>Console</Text>
        </Link>
        <NavIcon className="fas fa-angle-right" />
        <Text onClick={() => changeView('dashboard')}>Travel Manager Dashboard</Text>
        {view !== 'dashboard' && (
          <>
            <NavIcon className="fas fa-angle-right" />
            <Text onClick={() => changeView(view)}>{view}</Text>
          </>
        )}
      </Container>
    )}
  </ViewContext.Consumer>
);

export default withRouter(BreadCrumbs);
