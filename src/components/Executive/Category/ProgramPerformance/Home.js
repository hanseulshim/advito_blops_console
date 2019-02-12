import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import { PROGRAM_PERFORMANCE_TRAVEL, NO_CHANGE_SINCE } from 'components/graphql/query';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import { SectionTitle, Title, Value } from 'components/common/Typography';
import LineChart from './LineChart';
import airAlert from 'assets/sidebar/air.png';
import hotelAlert from 'assets/sidebar/hotel.png';

const SectionTitleSpaced = styled(SectionTitle)`
  margin-bottom: 0.5em;
`;

const PerformanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em 4em;
`;

const Performance = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

const TitleSpaced = styled(Title)`
  flex: 1;
  margin-bottom: 0.5em;
`;

const ValueSpaced = styled(Value)`
  flex: 2;
`;

const NoChangeSince = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2em;
`;

const LeafIcon = styled(Icon)`
  color: ${props => props.theme.tradewind};
  margin-right: 1em;
`;

const StoryDescription = styled.div`
  margin-top: 3em;
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

const Home = () => (
  <>
    <SectionTitleSpaced>Program Performance</SectionTitleSpaced>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <GraphQL query={PROGRAM_PERFORMANCE_TRAVEL} name="programPerformanceTravel">
      {({ data }) => (
        <PerformanceContainer>
          {data.map((performance, index) => (
            <Performance key={index}>
              <LineChart index={index} />
              <div>
                <TitleSpaced>{performance.title}</TitleSpaced>
                <ValueSpaced>{performance.value}</ValueSpaced>
                {index === 0 && (
                  <GraphQL query={NO_CHANGE_SINCE} name="noChangeSince">
                    {({ data }) => (
                      <NoChangeSince>
                        <LeafIcon className="fas fa-leaf" />
                        <span>No change since {data}</span>
                      </NoChangeSince>
                    )}
                  </GraphQL>
                )}
              </div>
            </Performance>
          ))}
        </PerformanceContainer>
      )}
    </GraphQL>
    <StoryDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </StoryDescription>
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
  </>
);

export default Home;
