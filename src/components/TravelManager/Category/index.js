import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProgramPerformance from './ProgramPerformance';

const Container = styled.div`
  margin: 0 4em;
`;

const showCategory = view => {
  if (view === 'Program Performance') {
    return <ProgramPerformance />;
  }
};

const Category = ({ view }) => {
  return (
    <>
      <Navigation />
      <Container>{showCategory(view)}</Container>
    </>
  );
};

export default Category;
