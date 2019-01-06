import React from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './toggle.scss';
import './slider.scss';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SliderWrapper = styled.div`
  width: 100px;
  margin: 0 1em;
  margin-bottom: 5px;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: ${props => props.year && '2em'};
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
      <ToggleContainer year>
        <View>YEAR TOGGLE:</View>
        <SliderWrapper>
          <Slider
            min={2016}
            max={2018}
            defaultValue={2018}
            included={false}
            marks={{ 2016: 2016, 2017: 2017, 2018: 2018 }}
            step={null}
          />
        </SliderWrapper>
      </ToggleContainer>
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
