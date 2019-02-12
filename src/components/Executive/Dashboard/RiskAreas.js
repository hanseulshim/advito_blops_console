import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { RISK_AREAS } from 'components/graphql/query';
import Button from 'components/common/Button';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
  Metric,
} from './SavingsRiskStyle';

class RiskAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 3,
    };
  }

  setLimit = lim => {
    this.setState({
      limit: lim,
    });
  };
  render() {
    const { limit } = this.state;

    return (
      <Container>
        <TitleContainer>
          <SectionTitle>top {limit} risk areas</SectionTitle>
          {limit === 3 ? (
            <Button text="View More" style={{ marginLeft: '5%' }} onClick={e => this.setLimit(5)} />
          ) : (
            <Button text="View Less" style={{ marginLeft: '5%' }} onClick={e => this.setLimit(3)} />
          )}
        </TitleContainer>
        <GraphQL query={RISK_AREAS} name="riskAreas">
          {({ data }) =>
            data.riskAreas.map((riskArea, index) => (
              <Link to="/executive/risk-areas" key={index}>
                <RowContainer>
                  <Rank>{index + 1}</Rank>
                  <Row first={index === 0}>
                    <RowTitle>{riskArea.title}</RowTitle>
                    <Value>{riskArea.value}</Value>
                  </Row>
                  <RightIcon className="fas fa-angle-right" />
                  <Metric>
                    <Value>$394k/280k</Value>
                    <Unit>Regulatory</Unit>
                  </Metric>
                  <Metric>
                    <Value>32/$24k</Value>
                    <Unit>Retail Sales</Unit>
                  </Metric>
                  <Metric>
                    <Value>26%/$15k</Value>
                    <Unit>IT</Unit>
                  </Metric>
                </RowContainer>
              </Link>
            ))
          }
        </GraphQL>
      </Container>
    );
  }
}

export default RiskAreas;
