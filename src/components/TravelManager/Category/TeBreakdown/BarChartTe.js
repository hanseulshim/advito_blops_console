import React from 'react';
import styled from 'styled-components';
import SummaryCard from './SummaryCard';
import HoverCard from './HoverCard';

const Container = styled.div`
  display: flex;
`;
const ChartContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 2em;
`;

const Row = styled.div`
  display: flex;
  height: 2em;
  cursor: pointer;
`;

const CostRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1em;
  margin-bottom: 1em;
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
  z-index:2;
`;

const Delta = styled.div`
  background: ${props => props.theme.deepBlush};
  position: absolute;
  height: 100%;
  width: ${({ width = 0 }) => width}%;
  left: ${({ left }) => left}%;
`;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class BarChartTe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverCard: null,
    };
  }

  onIconHover = expense => {
    this.setState({
      hoverCard: expense,
    });
  };

  clearHover = e => {
    this.setState({
      hoverCard: null,
    });
  };

  render() {
    const { metricSpend, allMetrics, totalTripCost } = this.props;
    const { hoverCard } = this.state;

    const maxTripCost = Math.max(...allMetrics.map(metric => metric.totalTripCost));
    const allTripCosts = allMetrics.map(metric => metric.totalTripCost);
    const averageTripCost =
      allTripCosts.reduce((total, amount) => total + amount) / allTripCosts.length;

    const showDelta = totalTripCost / maxTripCost > averageTripCost / maxTripCost;
    return (
      <Container>
        <ChartContainer>
          <CostRow>
            <span>Average Total Trip Cost</span>
            <span>{formatter.format(totalTripCost).replace('.00', '')}</span>
          </CostRow>
          {metricSpend.map((expense, idx) => (
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
                  onMouseOver={e => this.onIconHover(expense)}
                  onMouseOut={e => this.clearHover(e)}
                />
                {showDelta && (
                  <Delta
                    width={
                      (totalTripCost / maxTripCost) * 100 - (averageTripCost / maxTripCost) * 100
                    }
                    left={(averageTripCost / maxTripCost) * 100}
                  />
                )}
              </BarContainer>
            </Row>
          ))}
        </ChartContainer>

        {!hoverCard ? <SummaryCard expenses={metricSpend} /> : <HoverCard expense={hoverCard} />}
      </Container>
    );
  }
}

export default BarChartTe;
