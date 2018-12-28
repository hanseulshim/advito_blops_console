import React, { Component } from 'react';
import './Hotel.scss';

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.layout = {
      width: 1000,
      height: 1000,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
      hotelWidth: 100,
      hotelHeight: 100,
      windowLength: 2,
      totalPixels: 6013, // hardcoded because it shouldn't change.
    };
  }

  insertHotel = (pixelList, x, y, hotel) => {
    const pixelWidth = this.layout.width / this.layout.hotelWidth;
    const pixelHeight = this.layout.height / this.layout.hotelHeight;
    const index = pixelList.length + 1;
    pixelList.push(
      <rect
        key={index}
        className={index}
        width={pixelWidth}
        height={pixelHeight}
        x={x * pixelWidth}
        y={y * pixelHeight}
        fill={hotel.fill}
      />,
    );
    console.log(pixelList);
  };

  createHotel = () => {
    const hotelHeight = this.layout.hotelHeight;
    const hotelWidth = this.layout.hotelWidth;
    const windowLength = this.layout.windowLength;
    const hotelList = this.props.data.categories;
    let hotel = hotelList.shift();
    let total =
      (hotel.value * this.layout.totalPixels) / this.props.data.hotel.total;
    const arr = [];
    for (let y = 1; y <= hotelHeight; y++) {
      for (let x = 1; x <= hotelWidth; x++) {
        if (hotelList.length && arr.length + 1 > total) {
          hotel = hotelList.shift();
          total +=
            (hotel.value * this.layout.totalPixels) /
            this.props.data.hotels.total;
        }
        if (y > hotelHeight * 0.55 || x > hotelWidth * 0.45) {
          if (x % 6 <= windowLength || y % 6 <= windowLength) {
            this.insertHotel(arr, x, y, hotel);
          } else if (x < hotelWidth * 0.5 && y < hotelHeight * 0.6) {
            this.insertHotel(arr, x, y, hotel);
          } else if (
            y < hotelHeight * 0.06 ||
            y > hotelHeight * 0.95 ||
            x > hotelWidth * 0.95
          ) {
            this.insertHotel(arr, x, y, hotel);
          }
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

    return (
      <div className="chart-container">
        <div className="hotel-row">
          <div style={{ width: 300 }}>
            <svg
              viewBox={`0 0 ${outerWidth} ${outerHeight}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <g style={stageStyle}>
                <g>{this.createHotel()}</g>
              </g>
            </svg>
          </div>
          <div style={{ width: 300 }}>
            <svg
              viewBox={`0 0 ${outerWidth} ${outerHeight}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <g style={stageStyle}>
                <g>{this.createHotel()}</g>
              </g>
            </svg>
          </div>
          <div style={{ width: 300 }}>
            <svg
              viewBox={`0 0 ${outerWidth} ${outerHeight}`}
              preserveAspectRatio="xMidYMid meet"
            >
              <g style={stageStyle}>
                <g>{this.createHotel()}</g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel;
