import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { USER_PROFILE_OVERVIEW } from 'components/graphql/query';
import { SectionTitle, Unit } from 'components/common/Typography';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 10%;
`;

const Title = styled(SectionTitle)`
  margin-bottom: 0.5em;
`;

const ProfileSidebar = () => {
  return (
    <Query query={USER_PROFILE_OVERVIEW}>
      {({ data: { userProfileOverview }, loading }) =>
        loading ? null : (
          <Container>
            <Section>
              <Title>My Applications</Title>
              {userProfileOverview.myApplications.map((App, i) => (
                <p key={'app' + i}>{App} </p>
              ))}
            </Section>
            <Section>
              <Title>Persona</Title>
              <p>{userProfileOverview.persona}</p>
            </Section>
            <Section>
              <Title>Recent Activities</Title>
              {userProfileOverview.recentActivities.map((activity, i) => {
                return (
                  <div style={{ marginBottom: '1em' }} key={'activity' + i}>
                    <Unit style={{ marginBottom: '5px' }}>{activity.date}</Unit>
                    <br />
                    {activity.activity}
                  </div>
                );
              })}
            </Section>
          </Container>
        )
      }
    </Query>
  );
};

export default ProfileSidebar;
