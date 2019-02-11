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
      activity: 'Air dashboard login'
    },
    {
      date: 'January 17, 2019',
      activity: 'Password changed.'
    },
    {
      date: 'January 12, 2019',
      activity: 'User name changed'
    },
    {
      date: 'December 24, 2018',
      activity: 'Account created'
    },

  ]
}

const Container = styled.div`
display:flex;
flex:1;
flex-direction:column;
justify-content:space-around;`

const Title = styled(SectionTitle)`
margin-bottom:.5em;
`



const ProfileSidebar = () => {
  return (
    <Container>
      <div>
        <Title>My Applications</Title>
        {data.Applications.map(App => <p>{App} </p>)}
      </div>
      <div>
        <Title>Persona</Title>
        <p>{data.Persona}</p>
      </div>
      <div>
        <Title>Recent Activities</Title>
        {data.Activities.map((Activity) => {
          return (
            <div style={{ marginBottom: '1em' }}>
              <Unit>{Activity.date}</Unit>
              <p>{Activity.activity}</p>
            </div>
          )
        })}
      </div>
    </Container>
  )
};

export default ProfileSidebar;
