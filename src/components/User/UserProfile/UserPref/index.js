import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from 'components/common/Checkbox';
import Select from 'react-select';

let dateTimeOptions = [
  {
    label: 'European(01 JAN 2017)',
    value: 'European',
  },
  {
    label: 'Western(JAN 01 2017)',
    value: 'Western',
  },
  {
    label: 'Sailor(%$&&^%$@!)',
    value: 'Sailor',
  },
];

let timeZones = [
  {
    label: '(UTC-05:00) Eastern Time',
    value: 'Eastern',
  },
  {
    label: '(MTN-07:00) Mountain',
    value: 'Mountain',
  },
];

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const UserPreferences = props => {
  const { onChange, dateTimeFormat, timeZone } = props;
  return (
    <>
      <h3>Preferences</h3>
      <Row>
        <Select onChange={onChange} value={dateTimeFormat} options={dateTimeOptions} />
        <Select onChange={onChange} value={timeZone} options={timeZones} />
      </Row>
      <Checkbox>Receive email notifications</Checkbox>
    </>
  );
};

export default UserPreferences;
