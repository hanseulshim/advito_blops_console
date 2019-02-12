import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import Button from 'components/common/Button';
import { RISK_AREAS_EXECUTIVE } from 'components/graphql/query';
import {
  Container,
  TitleContainer,
  RowContainer,
  Rank,
  Row,
  RowTitle,
  RightIcon,
  Metric,
  Unit,
  Title,
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
        <GraphQL query={RISK_AREAS_EXECUTIVE} name="riskAreasExecutive">
          {({ data }) =>
            data.riskAreas.map((riskArea, index) => (
              <Link to="/executive/risk-areas" key={index}>
                <RowContainer>
                  <Rank>{index + 1}</Rank>
                  <Row first={index === 0}>
                    <RowTitle>{riskArea.title}</RowTitle>
                    <Value>
                      {riskArea.value} <Unit>{riskArea.unit}</Unit>
                      {riskArea.secondaryValue && ` / ${riskArea.secondaryValue}`}{' '}
                      <Unit>{riskArea.secondaryUnit}</Unit>
                    </Value>
                  </Row>
                  <RightIcon className="fas fa-angle-right" />
                  {riskArea.divisions.map((division, index) => (
                    <Metric key={index}>
                      <Value>
                        {division.value} <Unit>{division.unit}</Unit>
                        {division.secondaryValue && ` / ${division.secondaryValue}`}{' '}
                        <Unit>{division.secondaryUnit}</Unit>
                      </Value>
                      <Title>{division.title}</Title>
                    </Metric>
                  ))}
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
