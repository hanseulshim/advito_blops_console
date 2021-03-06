import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { PROGRAM_PERFORMANCE_LIST_TRAVEL } from 'components/graphql/query';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import { Title, Value } from 'components/common/Typography';
import LineChart from './LineChart';
import airAlert from 'assets/sidebar/air.png';
import Loader from 'components/common/Loader';
import hotelAlert from 'assets/sidebar/hotel.png';
import { withFilterContext } from 'components/context';

const PerformanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4em 4em;
`;

const Performance = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-right: 2em;
`;

const TitleSpaced = styled(Title)`
  flex: 1;
  margin-bottom: 0.5em;
`;

const ValueSpaced = styled(Value)`
  flex: 2;
  font-size: 2em;
`;

const Unit = styled.span`
  font-size: 1rem;
`;

const NoChangeSince = styled.div`
  display: flex;
  justify-content: center;
  font-style: italic;
  width: 100%;
`;

const LeafIcon = styled(Icon)`
  color: ${props => props.theme.tradewind};
  margin-right: 1em;
`;

const StoryContainer = styled.div`
  display: flex;
  margin: 2em 4em;
`;

const Story = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

const StoryTitle = styled.div`
  font-size: 1.3em;
  margin: 0 0.5em;
`;

const Home = ({ context: { filterId } }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ margin: '0em 2em' }}>
      Overall, the Average Total Trip Cost, Bookings Outside of Agency and Expenses Out of Policy
      have decreased by 3% this month; however, Air leakage and Out of Policy Premium Seats have
      increased. If this trend continues, you can expect a financial impact of approximately $1.2
      million this program year.
    </div>
    <Query query={PROGRAM_PERFORMANCE_LIST_TRAVEL} variables={{ filterId }}>
      {({ data: { programPerformanceListTravel, noChangeSince }, loading }) =>
        loading ? (
          <Loader />
        ) : (
          <>
            <PerformanceContainer>
              {programPerformanceListTravel.map((performance, index) => (
                <Performance key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <TitleSpaced>{performance.title}</TitleSpaced>
                    <ValueSpaced>
                      {performance.value} <Unit>{performance.unit}</Unit>
                    </ValueSpaced>
                  </div>
                  <LineChart index={index} />
                </Performance>
              ))}
            </PerformanceContainer>
            <NoChangeSince>
              <LeafIcon className="fas fa-leaf" />
              <span>No change since {noChangeSince}</span>
            </NoChangeSince>
          </>
        )
      }
    </Query>
    <StoryContainer>
      <Story>
        <div>
          <img src={airAlert} alt="air" />
        </div>
        <StoryTitle>Air Data Story</StoryTitle>
        <Link to="/travel/program-performance/air-story">
          <Button text="View" />
        </Link>
      </Story>
      <Story>
        <div>
          <img src={hotelAlert} alt="hotel" />
        </div>
        <StoryTitle>Hotel Data Story</StoryTitle>
        <Link to="/travel/program-performance/hotel-story">
          <Button text="View" />
        </Link>
      </Story>
    </StoryContainer>
  </div>
);

export default withFilterContext(Home);
