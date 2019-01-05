import React, { Component } from 'react';
import styled from 'styled-components';
import { AirplaneArr } from './airplaneCoords';
import Legend from '../Legend';

const Container = styled.div`
  flex: 0 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Plane = styled.div`
  width: 100%;
`;

class Airplane extends Component {
  constructor(props) {
    super(props);
    this.layout = {
      width: 65,
      height: 50,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
      totalPixels: 1473,
    };
  }

  getPixelCount = data =>
    data.subCategories.map(subCategory => ({
      totalPixels: Math.round(this.layout.totalPixels * (subCategory.value / data.total)),
      ...subCategory,
    }));

  createPlane = () => {
    const airlineFill = this.getPixelCount(this.props.data);
    const airplaneArr = AirplaneArr.slice();
    let point = airplaneArr.shift();
    let currentPlane = airlineFill.shift();
    const arr = [];
    let currentPixelCount = currentPlane.totalPixels;

    for (let x = 1; x <= 100; x++) {
      for (let y = 1; y <= 100; y++) {
        if (point === x * 100 + y) {
          if (airlineFill.length && arr.length === currentPixelCount) {
            currentPlane = airlineFill.shift();
            currentPixelCount += currentPlane.totalPixels;
          }
          arr.push(
            <rect
              width={1}
              key={x * 100 + y}
              height={1}
              x={x}
              y={y}
              fill={currentPlane.color}
              stroke={'white'}
              strokeWidth={'.1px'}
              strokeOpacity={'0.35'}
              rx={0.25}
              ry={0.25}
            />
          );
          point = airplaneArr.shift();
        }
      }
    }

    return arr;
  };

  render() {
    const { subCategories, icon, title, type } = this.props.data;
    const outerWidth = this.layout.width + this.layout.margin.left + this.layout.margin.right;
    const outerHeight = this.layout.height + this.layout.margin.top + this.layout.margin.bottom;
    return (
      <Container>
        <Legend
          subCategories={subCategories}
          icon={icon}
          title={title}
          type={type}
          dataView={this.props.dataView}
        />
        <Plane>
          <svg viewBox={`0 15 ${outerWidth} ${outerHeight}`} preserveAspectRatio="xMidYMid meet">
            <g>{this.createPlane()}</g>
          </svg>
        </Plane>
      </Container>
    );
  }
}

export default Airplane;
