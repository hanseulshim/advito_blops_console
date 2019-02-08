import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

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

const getPath = path => {
  if (path.includes('travel')) return 'Travel Manager Dashboard';
  else if (path.includes('executive')) return 'Executive Dashboard';
};

const getSubPath = subpath => {
  switch (subpath) {
    case 'program-performance':
      return 'Program Performance';
    case 'net-spend-analysis':
      return 'Net Spend Analysis';
    case 'personas':
      return 'Personas';
    case 'markets':
      return 'Markets';
    case 'savings-opportunities':
      return 'Savings Opportunities';
    case 'risk-areas':
      return 'Risk Areas';
    default:
      return '';
  }
};

const BreadCrumbs = ({ location }) => {
  const { pathname } = location;
  const subPaths = pathname.split('/');
  const renderSubPaths = subPaths.length === 3 && subPaths[2] !== 'dashboard';
  return (
    <Container>
      <Link replace to={'/'}>
        <BackTo>{'«'} Back to Console</BackTo>
      </Link>
      <Spacer>|</Spacer>
      {renderSubPaths ? (
        <Link to={`/${subPaths[1]}/dashboard`}>
          <BackTo>{getPath(pathname)}</BackTo>
        </Link>
      ) : (
        <Text>{getPath(pathname)}</Text>
      )}
      {renderSubPaths && (
        <>
          <Spacer>|</Spacer>
          <Text>{getSubPath(subPaths[2])}</Text>
        </>
      )}
    </Container>
  );
};

export default withRouter(BreadCrumbs);
