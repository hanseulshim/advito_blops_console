import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const Container = styled.div`
  display: flex;
`;

const ProgramPerformanceComponent = styled.div`
  padding: 0.5em 1em;
  background: ${props => props.theme.rajah};
  color: ${props => props.theme.alabaster};
`;

const InfoIcon = styled(Icon)`
  margin-right: 0.5em;
`;

const Info = styled.div`
  padding: 0.5em 1.5em;
  flex: 1;
  background: ${props => props.theme.alabaster};
`;

const ProgramPerformance = () => (
  <Container>
    <ProgramPerformanceComponent>
      <InfoIcon className="fab fa-envira" />
      <span>Program Performance</span>
    </ProgramPerformanceComponent>
    <Info>Total program Performance is 7.1 out of 8.7 with no change since July 30, 2018</Info>
  </Container>
);

export default ProgramPerformance;
