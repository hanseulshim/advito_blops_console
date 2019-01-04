import React from 'react';
import styled from 'styled-components';
import ViewContext from 'components/context/ViewContext';
import Icon from 'components/common/Icon';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2em;
`;

const NavItem = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: ${props => (!props.active ? `2px solid ${props.theme.pumice}` : '')};
  border-top: ${props => (props.active ? `2px solid ${props.theme.pumice}` : '')};
  border-left: ${props => (props.active ? `2px solid ${props.theme.pumice}` : '')};
  border-right: ${props => (props.active ? `2px solid ${props.theme.pumice}` : '')};
  padding-bottom: ${props => (props.active ? 'calc(1em + 2px)' : '1em')};
  padding-right: ${props => (props.active ? 'calc(1em - 2px)' : '1em')};
  padding-left: ${props => (props.active ? 'calc(1em - 2px)' : '1em')};
  padding-top: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  cursor: pointer;
`;

const HomeIcon = styled(Icon)`
  font-size: 1.2em;
  color: ${props => props.theme.treePoppy};
  padding: 1em;
  border-bottom: 2px solid ${props => props.theme.pumice};
  cursor: pointer;
`;

const NavItems = [
  'Program Performance',
  'Net Spend Analysis',
  'Personas',
  'Savings Opportunities',
  'Risk Areas',
];

const Navigation = () => {
  return (
    <ViewContext.Consumer>
      {({ view, changeView }) => (
        <Container>
          <HomeIcon className="fas fa-home" onClick={() => changeView('dashboard')} />
          {NavItems.map((nav, index) => (
            <NavItem key={index} onClick={() => changeView(nav)} active={view === nav}>
              {nav}
            </NavItem>
          ))}
        </Container>
      )}
    </ViewContext.Consumer>
  );
};

export default Navigation;
