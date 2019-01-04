import React from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import './style.scss';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const View = styled.div`
  margin-bottom: 5px;
  margin-right: 0.5em;
  font-weight: 400;
  color: #000;
`;

const ToggleLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: ${props => props.active && 400};
  color: ${props => props.active && '#000'};
`;

const DataToggle = ({ dataView, toggleDataView }) => {
  return (
    <Container>
      <div>Year Toggle</div>
      <ToggleContainer>
        <View>DATA VIEW:</View>
        <div>
          <ToggleLabel>
            <Label active={dataView === 'value'}>#</Label>
            <Label active={dataView === 'percent'}>%</Label>
          </ToggleLabel>
          <Toggle checked={dataView === 'percent'} icons={false} onChange={toggleDataView} />
        </div>
      </ToggleContainer>
    </Container>
  );
};

export default DataToggle;
