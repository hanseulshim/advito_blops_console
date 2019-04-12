import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 1%;
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
  background: ${props => props.theme.alabaster};
  position: relative;
`;

const Bar = styled.div`
  width: ${props => props.width};
  height: 100%;
  position: absolute;
  left: 0;
  background-color: ${props => props.theme.deepBlush};
`;

const BarChartTe = ({ data, totalTripCost }) => {
  //   const acceptWidth = { width: `${(accept / solicited) * 100}%` };
  //   const negotatingWidth = { width: `${(negotiating / solicited) * 100}%` };
  //   const rejectedWidth = { width: `${(rejected / solicited) * 100}%` };
  //   const targetCalc = target / solicited >= 1 ? 113 : (target / solicited) * 100;
  //   const targetWidth = { left: `${targetCalc}%` };

  return (
    <Container>
      {data.map((expense, idx) => (
        <Row key={'expense' + idx}>
          <Icon>
            <Image src={require(`assets/story/${expense.icon}`)} />
          </Icon>
          <BarContainer>
            <Bar width={Math.floor((expense.value / totalTripCost) * 100)} />
          </BarContainer>
        </Row>
      ))}
    </Container>
  );
};

export default BarChartTe;
