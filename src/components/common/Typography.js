import React from 'react';
import styled from 'styled-components';

const SectionTitleStyled = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  color: ${props => props.theme.black};
  text-transform: uppercase;
`;

const TitleStyled = styled.div`
  font-size: 1.1em;
  font-weight: 500;
`;

const ValueStyled = styled.div`
  font-size: 1.6em;
`;

export const SectionTitle = ({ children, ...rest }) => (
  <SectionTitleStyled {...rest}>{children}</SectionTitleStyled>
);
export const Title = ({ children, ...rest }) => <TitleStyled {...rest}>{children}</TitleStyled>;
export const Value = ({ children, ...rest }) => <ValueStyled {...rest}>{children}</ValueStyled>;
