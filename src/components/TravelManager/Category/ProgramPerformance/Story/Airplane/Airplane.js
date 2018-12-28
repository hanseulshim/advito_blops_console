import React, { Component } from 'react';
import './Airplane.scss';
import { AirplaneArr } from './help';
import Legend from './Legend';

class Airplane extends Component {
  constructor(props) {
    super(props);
    this.layout = {
      width: 70,
      height: 70,
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
    data.categories.map((airline, index) => ({
      name: airline.name,
      key: { index },
      totalPixels: Math.round(
        this.layout.totalPixels * (airline.value / data.total),
      ),
      ...airline,
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
            />,
          );
          point = airplaneArr.shift();
        }
      }
    }

    return arr;
  };

  render() {
    const outerWidth =
      this.layout.width + this.layout.margin.left + this.layout.margin.right;
    const outerHeight =
      this.layout.height + this.layout.margin.top + this.layout.margin.bottom;
    const stageStyle = {
      transform: `translate(${this.layout.margin.left}px, ${
        this.layout.margin.top
        }px)`,
    };

    const { ...props } = this.props;

    return (
      <div className="airplane-column">
        <Legend {...props} />
        <div
          style={{
            width: 400,
            position: 'relative',
            bottom: '100px',
            right: '50px',
          }}
        >
          <svg
            viewBox={`0 0 ${outerWidth} ${outerHeight}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <g style={stageStyle}>
              <g>{this.createPlane()}</g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Airplane;
