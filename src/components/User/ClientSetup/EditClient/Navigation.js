import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom:3em;
`;

const NavItem = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  padding: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-top: ${props => props.selected && `1px solid ${props.theme.grayNurse}`};
  border-bottom: ${props => !props.selected && `1px solid ${props.theme.grayNurse}`};
  border-left: ${props => props.selected && `1px solid ${props.theme.grayNurse}`};
  border-right: ${props => props.selected && `1px solid ${props.theme.grayNurse}`};
  padding: ${props => !props.selected && '0 calc(1em + 1px) calc(1em - 1px) calc(1em + 1px)'};
  background: ${props => props.selected && props.theme.white};
  cursor: pointer;
`;

const tabs = ["General", "Divisions", "Users", "Applications"];


const Navigation = (props) => {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <NavItem key={"tab" + index} onClick={e => props.changeView(tab)} selected={props.selected === tab}>{tab}</NavItem>
      ))}
    </Container>
  );
}

export default Navigation;