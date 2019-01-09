import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ProgramPerformance from './ProgramPerformance';
// import SavingsOpportunities from './SavingsOpportunities';

const Container = styled.div`
  padding: 2em 4em;
  background: ${props => props.theme.white};
`;

const showCategory = view => {
  if (view === 'Program Performance') {
    return <ProgramPerformance view={view} />;
  }
  // } else if (view === 'Savings Opportunities') {
  //   return <SavingsOpportunities />;
  // }
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
