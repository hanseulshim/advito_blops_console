import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import ProgramSelect from './ProgramSelect';
import BottomInfo from './BottomInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
`;

export default ({ infoData, viewData }) => (
  <Container>
    <ProgramPerformance />
    <ProgramSelect data={viewData} />
    <BottomInfo data={infoData} />
  </Container>
);
