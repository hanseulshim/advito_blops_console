import React from 'react';
import styled from 'styled-components';
import { max } from 'moment';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  /* margin-bottom: 1%; */
  height: 2em;
`;

const Icon = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 25px;
`;

const BarContainer = styled.div`
  flex: 1;
  position: relative;
`;

const BarBackground = styled.div`
  background: ${props => props.theme.alabaster};
  position: absolute;
  left: 0;
  height: 100%;
  width: ${({ width = 0 }) => width}%;
`;

const AverageSpend = styled.div`
  background: transparent;
  position: absolute;
  left: 0;
  height: 100%;
  width: ${({ width = 0 }) => width}%;
  border-right: 2px solid #666;
  z-index: 2;
`;

const Spend = styled.div`
  width: ${({ width = 0 }) => width}%;
  height: 95%;
  position: absolute;
  left: 0;
  background-color: ${props =>
    props.spentTooMuch ? props.theme.deepBlush : props.theme.tradewind};
`;

const Benchmark = styled.div`
  width: ${({ width = 0 }) => width}%;
  height: 95%;
  position: absolute;
  left: 0;
  /* border-right: ${props =>
    props.spentTooMuch ? props.theme.deepBlush : props.theme.tradewind}; */
  border-right: 3px solid rgba(0, 0, 0, .35);
`;

const Delta = styled.div`
  background: ${props => props.theme.deepBlush};
  position: absolute;
  height: 100%;
  width: ${({ width = 0 }) => width}%;
  left: ${({ left }) => left}%;
`;

const BarChartTe = ({ personaSpend, allPersonas, totalTripCost }) => {
  const maxTripCost = Math.max(...allPersonas.personas.map(persona => persona.totalTripCost));
  const allTripCosts = allPersonas.personas.map(persona => persona.totalTripCost);
  const averageTripCost =
    allTripCosts.reduce((total, amount) => total + amount) / allTripCosts.length;

  const showDelta = totalTripCost / maxTripCost > averageTripCost / maxTripCost;

  return (
    <Container>
      {personaSpend.map((expense, idx) => (
        <Row key={'expense' + idx}>
          <Icon>
            <Image src={require(`assets/story/${expense.icon}`)} />
          </Icon>
          <BarContainer>
            <BarBackground width={(totalTripCost / maxTripCost) * 100} />
            <AverageSpend width={(averageTripCost / maxTripCost) * 100} />
            <Spend
              width={Math.floor((expense.value / maxTripCost) * 100)}
              spentTooMuch={expense.value > expense.benchmark}
            />
            <Benchmark
              width={Math.floor((expense.benchmark / maxTripCost) * 100)}
              spentTooMuch={expense.value > expense.benchmark}
            />
            {showDelta && (
              <Delta
                width={(totalTripCost / maxTripCost) * 100 - (averageTripCost / maxTripCost) * 100}
                left={(averageTripCost / maxTripCost) * 100}
              />
            )}
          </BarContainer>
        </Row>
      ))}
    </Container>
  );
};

export default BarChartTe;
