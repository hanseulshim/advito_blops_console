import React from 'react';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';
import variables from 'styles/variables';

const LoaderStyled = styled.div`
  margin: 1em 0;
`;

const Loader = () => {
  return (
    <LoaderStyled>
      <GridLoader color={variables.tradewind} />
    </LoaderStyled>
  );
};

export default Loader;
