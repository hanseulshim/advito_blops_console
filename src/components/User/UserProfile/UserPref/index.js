import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'components/common/Select';
import Checkbox from 'components/common/Checkbox';

let locations = [
  {
    id: 0,
    title: 'New York',
    selected: false,
    key: 'location',
  },
  {
    id: 1,
    title: 'Dublin',
    selected: false,
    key: 'location',
  },
  {
    id: 2,
    title: 'California',
    selected: false,
    key: 'location',
  },
  {
    id: 3,
    title: 'Istanbul',
    selected: false,
    key: 'location',
  },
  {
    id: 4,
    title: 'Izmir',
    selected: false,
    key: 'location',
  },
  {
    id: 5,
    title: 'Oslo',
    selected: false,
    key: 'location',
  },
];

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const UserPreferences = () => {
  return (
    <>
      <h3>Preferences</h3>
      <Row>
        <Select title="Locations" list={locations} label={'Date/Time Format'} />
        <Select title="Locations" list={locations} label={'Date/Time Format'} />
      </Row>
      <Checkbox>Receive email notifications</Checkbox>
    </>
  );
};

export default UserPreferences;
