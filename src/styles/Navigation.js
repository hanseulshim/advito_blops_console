import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItem = styled(Link)`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  padding: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-top: ${props => props.replace && `1px solid ${props.theme.grayNurse}`};
  border-bottom: ${props => !props.replace && `1px solid ${props.theme.grayNurse}`};
  border-left: ${props => props.replace && `1px solid ${props.theme.grayNurse}`};
  border-right: ${props => props.replace && `1px solid ${props.theme.grayNurse}`};
  padding: ${props => !props.replace && '0 calc(1em + 1px) calc(1em - 1px) calc(1em + 1px)'};
  background: ${props => props.replace && props.theme.white};
  cursor: pointer;
`;
