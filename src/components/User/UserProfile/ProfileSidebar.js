import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Value, Unit } from 'components/common/Typography';

//Mock data

const data = {
  Applications: ['360 Analytics', 'Air'],
  Persona: 'Road Warrior',
  Activities: [
    {
      date: 'January 21, 2019',
      activity: 'Air dashboard login',
    },
    {
      date: 'January 17, 2019',
      activity: 'Password changed.',
    },
    {
      date: 'January 12, 2019',
      activity: 'User name changed',
    },
    {
      date: 'December 24, 2018',
      activity: 'Account created',
    },
  ],
};

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
    <Container>
      <Section>
        <Title>My Applications</Title>
        {data.Applications.map((App, i) => (
          <p key={'app' + i}>{App} </p>
        ))}
      </Section>
      <Section>
        <Title>Persona</Title>
        <p>{data.Persona}</p>
      </Section>
      <Section>
        <Title>Recent Activities</Title>
        {data.Activities.map((Activity, i) => {
          return (
            <div style={{ marginBottom: '1em' }} key={'activity' + i}>
              <Unit style={{ marginBottom: '5px' }}>{Activity.date}</Unit>
              <br />
              {Activity.activity}
            </div>
          );
        })}
      </Section>
    </Container>
  );
};

export default ProfileSidebar;
