import React from 'react';
import styled from 'styled-components';
import ProgramPerformance from './ProgramPerformance';
import ProgramSelect from './ProgramSelect';
import BottomInfo from './BottomInfo';

//TODO: eventually delete
import { viewData, infoData } from 'data/viewData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Container>
    <ProgramPerformance />
    <ProgramSelect data={viewData} />
    <BottomInfo data={infoData} />
  </Container>
);
