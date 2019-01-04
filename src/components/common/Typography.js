import React from 'react';
import styled from 'styled-components';

const SectionTitleStyled = styled.div`
  font-size: 1.25em;
  line-height: 1.25em;
  font-weight: 500;
  color: ${props => props.theme.black};
  text-transform: uppercase;
`;

const TitleStyled = styled.div`
  font-weight: 400;
  color: ${props => props.theme.black};
`;

const ValueStyled = styled.div`
  font-size: 1.3em;
  line-height: 1.3em;
  font-weight: 400;
  color: ${props => props.theme.black};
`;

const UnitStyled = styled.span`
  font-size: 1em;
  line-height: 1em;
  font-weight: 400;
  color: ${props => props.theme.black};
`;

export const SectionTitle = ({ children, ...rest }) => (
  <SectionTitleStyled {...rest}>{children}</SectionTitleStyled>
);
export const Title = ({ children, ...rest }) => <TitleStyled {...rest}>{children}</TitleStyled>;
export const Value = ({ children, ...rest }) => <ValueStyled {...rest}>{children}</ValueStyled>;
export const Unit = ({ children, ...rest }) => <UnitStyled {...rest}>{children}</UnitStyled>;
