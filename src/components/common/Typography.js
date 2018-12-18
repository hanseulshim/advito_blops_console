import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyled = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
`;

const TitleStyled = styled.div`
  font-size: 1.1em;
  font-weight: 500;
`;

const ValueStyled = styled.div`
  font-size: 1.6em;
`;

export const SectionHeader = ({ children, ...rest }) => (
  <SectionHeaderStyled {...rest}>{children}</SectionHeaderStyled>
);
export const Title = ({ children, ...rest }) => <TitleStyled {...rest}>{children}</TitleStyled>;
export const Value = ({ children, ...rest }) => <ValueStyled {...rest}>{children}</ValueStyled>;
