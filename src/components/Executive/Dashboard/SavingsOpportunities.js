import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import Button from 'components/common/Button';
import { SAVINGS_OPPORTUNITIES_EXECUTIVE } from 'components/graphql/query';
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

class SavingsOpportunities extends React.Component {
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
          <SectionTitle>top {limit} savings opportunities</SectionTitle>
          {limit === 3 ? (
            <Button text="View More" style={{ marginLeft: '5%' }} onClick={e => this.setLimit(5)} />
          ) : (
            <Button text="View Less" style={{ marginLeft: '5%' }} onClick={e => this.setLimit(3)} />
          )}
        </TitleContainer>
        <GraphQL
          query={SAVINGS_OPPORTUNITIES_EXECUTIVE}
          variables={{ limit }}
          name="opportunitiesExecutive"
        >
          {({ data }) =>
            data.opportunities.map((opportunity, index) => (
              <Link to="/executive/savings-opportunities" key={index}>
                <RowContainer first={index === 0}>
                  <Rank>{index + 1}</Rank>
                  <Row first={index === 0}>
                    <RowTitle>{opportunity.title}</RowTitle>
                    <Value>
                      {opportunity.value} <Unit>{opportunity.unit}</Unit>
                      {opportunity.secondaryValue && ` / ${opportunity.secondaryValue}`}{' '}
                      <Unit>{opportunity.secondaryUnit}</Unit>
                    </Value>
                  </Row>
                  <RightIcon className="fas fa-angle-right" />
                  {opportunity.divisions.map((division, index) => (
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

export default SavingsOpportunities;
