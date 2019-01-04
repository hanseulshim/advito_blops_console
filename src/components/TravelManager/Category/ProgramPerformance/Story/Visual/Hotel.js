import React, { Component } from 'react';
import styled from 'styled-components';
import Legend from './Legend';

const Container = styled.div`
  flex: 0 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HotelWrapper = styled.div`
  margin-top: 3.5em;
  width: 80%;
  align-self: flex-start;
`;

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.layout = {
      width: 800,
      height: 800,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
      hotelWidth: 100,
      hotelHeight: 100,
      windowLength: 2,
      totalPixels: 6013,
    };
  }

  insertHotel = (pixelList, x, y, fill) => {
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
        fill={fill}
      />
    );
  };

  createHotel = () => {
    const { subCategories, total } = this.props.data;
    const hotelHeight = this.layout.hotelHeight;
    const hotelWidth = this.layout.hotelWidth;
    const windowLength = this.layout.windowLength;
    const hotelList = subCategories.slice();
    let hotel = hotelList.shift();
    let totalCount = (hotel.value * this.layout.totalPixels) / total;
    const arr = [];
    for (let y = 1; y <= hotelHeight; y++) {
      for (let x = 1; x <= hotelWidth; x++) {
        if (hotelList.length && arr.length + 1 > totalCount) {
          hotel = hotelList.shift();
          totalCount += (hotel.value * this.layout.totalPixels) / total;
        }
        if (y > hotelHeight * 0.55 || x > hotelWidth * 0.45) {
          if (x % 6 <= windowLength || y % 6 <= windowLength) {
            this.insertHotel(arr, x, y, hotel.color);
          } else if (x < hotelWidth * 0.5 && y < hotelHeight * 0.6) {
            this.insertHotel(arr, x, y, hotel.color);
          } else if (y < hotelHeight * 0.06 || y > hotelHeight * 0.95 || x > hotelWidth * 0.95) {
            this.insertHotel(arr, x, y, hotel.color);
          }
        }
      }
    }
    return arr;
  };

  render() {
    const { subCategories, icon, title, type } = this.props.data;
    const outerWidth = this.layout.width + this.layout.margin.left + this.layout.margin.right;
    const outerHeight = this.layout.height + this.layout.margin.top + this.layout.margin.bottom;
    const stageStyle = {
      transform: `translate(${this.layout.margin.left}px, ${this.layout.margin.top}px)`,
    };

    return (
      <Container>
        <Legend
          hotel
          subCategories={subCategories}
          icon={icon}
          title={title}
          type={type}
          dataView={this.props.dataView}
        />
        <HotelWrapper>
          <svg viewBox={`0 0 ${outerWidth} ${outerHeight}`} preserveAspectRatio="xMidYMid meet">
            <g style={stageStyle}>
              <g>{this.createHotel()}</g>
            </g>
          </svg>
        </HotelWrapper>
      </Container>
    );
  }
}

export default Hotel;
