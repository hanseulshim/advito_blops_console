import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Icon from 'components/common/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

const NavIcon = styled(Icon)`
  margin-right: 0.5em;
  color: ${props => props.theme.boulder};
`;

const Text = styled.div`
  margin-right: 0.5em;
  color: ${props => props.theme.boulder};
`;

const Navigation = ({ location }) => (
  <Container>
    <Link to={'/'}>
      <Text>Console</Text>
    </Link>
    <NavIcon className="fas fa-angle-right" />
    <Link to={location.pathname}>
      <Text>Travel Manager Dashboard</Text>
    </Link>
  </Container>
);

export default withRouter(Navigation);
