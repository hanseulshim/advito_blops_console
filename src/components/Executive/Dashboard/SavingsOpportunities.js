import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value, Unit } from 'components/common/Typography';
import GraphQL from 'components/graphql';
import { SAVINGS_OPPORTUNITIES } from 'components/graphql/query';
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
        <GraphQL query={SAVINGS_OPPORTUNITIES} variables={{ limit: limit }} name="opportunities">
          {({ data }) =>
            data.opportunities.map((opportunity, index) => (
              <Link to="/executive/savings-opportunities" key={index}>
                <RowContainer>
                  <Rank>{index + 1}</Rank>
                  <Row first={index === 0}>
                    <RowTitle>{opportunity.title}</RowTitle>
                    <Value>
                      {opportunity.value} <Unit>{opportunity.unit}</Unit>
                    </Value>
                  </Row>
                  <RightIcon className="fas fa-angle-right" />
                  <Metric>
                    <Value>$11k</Value>
                    <Unit>IT</Unit>
                  </Metric>
                  <Metric>
                    <Value>$3.1k</Value>
                    <Unit>Recruiting</Unit>
                  </Metric>
                  <Metric>
                    <Value>$2.9k</Value>
                    <Unit>Product</Unit>
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

export default SavingsOpportunities;
