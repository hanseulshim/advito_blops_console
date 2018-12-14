import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import airAlert from 'assets/airAlert.png';
import hotelAlert from 'assets/hotelAlert.png';

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 0.5em;
`;

const PerformanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4em;
`;

const Performance = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  flex: 1;
  font-size: 1.25em;
  margin-bottom: 0.5em;
`;

const Value = styled.div`
  flex: 2;
  font-size: 2em;
`;

const NoChangeSince = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.2em;
  margin-top: 2em;
`;

const LeafIcon = styled(Icon)`
  color: ${props => props.theme.tradewind};
  margin-right: 1em;
`;

const StoryDescription = styled.div`
  margin-top: 6em;
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

const query = `
{
  performanceList {
    title
    value
  }
  noChangeSince
}
`;

const ProgramPerformance = ({ changeView }) => (
  <>
    <SectionTitle>Program Performance</SectionTitle>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <GraphQL query={query}>
      {data => (
        <PerformanceContainer>
          {data.performanceList.map((performance, index) => (
            <Performance key={index} first={index === 0}>
              <div>
                <Title>{performance.title}</Title>
                <Value>{performance.value}</Value>
                {index === 0 && (
                  <NoChangeSince>
                    <LeafIcon className="fas fa-leaf" />
                    <span>No change since {data.noChangeSince}</span>
                  </NoChangeSince>
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
        <a href="https://s3.amazonaws.com/beta.boostlabs/BlackOps/story/index.html" target="blank">
          <Button text="View" />
        </a>
      </Story>
      <Story>
        <div>
          <img src={hotelAlert} alt="hotel" />
        </div>
        <StoryTitle>Hotel Data Story</StoryTitle>
        <Button text="View" />
      </Story>
    </StoryContainer>
  </>
);

export default ProgramPerformance;
