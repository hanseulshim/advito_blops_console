import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Value } from 'components/common/Typography';
import { Query } from 'react-apollo';
import Button from 'components/common/Button';
import { SAVINGS_OPPORTUNITY_FEED_EXECUTIVE } from 'components/graphql/query';
import Loader from 'components/common/Loader';
import { withFilterContext } from 'components/context';
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
    const {
      context: { filterId },
    } = this.props;
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
        <Query
          query={SAVINGS_OPPORTUNITY_FEED_EXECUTIVE}
          variables={{ limit, filterId }}
          fetchPolicy="cache-and-network"
        >
          {({ data: { savingsOpportunityFeedExecutive }, loading }) =>
            loading ? (
              <Loader />
            ) : (
              savingsOpportunityFeedExecutive.savingsOpportunityList.map((opportunity, index) => (
                <Link to="/executive/savings-opportunities" key={index}>
                  <RowContainer>
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
                    {opportunity.divisionList.map((division, index) => (
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
            )
          }
        </Query>
      </Container>
    );
  }
}

export default withFilterContext(SavingsOpportunities);
