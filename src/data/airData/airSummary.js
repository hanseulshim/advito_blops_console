//This file contains all data required for the Air Summary visualizations

//IMPORT LAT LONG CITY DATA
import cities from 'cities.json';

//DATA FUNCTIONS
const findCity = (cityName, countryCode) => {
  const city = cities.find(
    location => location.name === cityName && location.country === countryCode,
  );
  return {
    latitude: city.lat,
    longitude: city.lng,
  };
};

const GetRandomCities = () => {
  const randoms = [];
  let i;
  for (i = 0; i < 10; i++) {
    randoms.push(cities[Math.floor(Math.random() * cities.length)]);
  }

  return randoms;
};

export const moreLocations = GetRandomCities();

//COMPONENT DATA

export const airSummary = {
  title: 'Air Summary',
  summary:
    '2017 was a busy year. Your company flew 3.18M miles, or 6.1M km between 12 countries. Deal makers comprised of the most spend and miles traveled, while Executives saved the most.',
  kpis: [
    {
      title: 'Spend',
      value: '$2.4M',
      delta: '($-190.5k)',
      icon: 'spend_icon',
    },
    {
      title: 'Tickets',
      value: '2,690',
      delta: '(+341)',
      icon: 'tickets_icon',
    },
    {
      title: 'Savings',
      value: '$144k',
      delta: '(+12.2k)',
      icon: 'savings_icon',
    },
    {
      title: 'Miles Traveled',
      value: '3.18',
      delta: '(+541k)',
      icon: 'miles_icon',
    },
    {
      title: 'Countries Visited',
      value: '12',
      delta: '(+4.1k)',
      icon: 'countries_icon',
    },
    {
      title: 'Emissions',
      value: '159 g/km',
      delta: '(+2.2k)',
      icon: 'emissions',
    },
  ],
  locations: [
    {
      thickness: 50,
      height: 0.4,
      opacity: 0.7,
      coords: [findCity('Mexico City', 'MX'), findCity('Paris', 'FR')],
      from: 'MEX',
      to: 'CDG',
    },
    {
      thickness: 10,
      height: 0.5,
      opacity: 1,
      coords: [findCity('Mexico City', 'MX'), findCity('Dubai', 'AE')],
      from: 'MEX',
      to: 'DWC',
    },
    {
      thickness: 5,
      height: 0.45,
      opacity: 0.3,
      coords: [findCity('Mexico City', 'MX'), findCity('Seoul', 'KR')],
      from: 'MEX',
      to: 'GMP',
    },
    {
      thickness: 5,
      height: 0.7,
      opacity: 1,
      coords: [findCity('Los Angeles', 'US'), findCity('New York City', 'US')],
      from: 'LAX',
      to: 'JFK',
    },
    {
      thickness: 75,
      height: 0.5,
      opacity: 0.4,
      coords: [findCity('Los Angeles', 'US'), findCity('Madrid', 'ES')],
      from: 'LAX',
      to: 'MAD',
    },
    {
      thickness: 30,
      height: 0.6,
      opacity: 0.8,
      coords: [findCity('Brasília', 'BR'), findCity('Beijing', 'CN')],
      from: 'BSB',
      to: 'PEK',
    },
  ],
  barcharts: [
    {
      title: 'Spend',
      data: [
        {
          field: 'US Domestic',
          value: 25000,
        },
        {
          field: 'Intra Europe',
          value: 14000,
        },
        {
          field: 'Intra Asia',
          value: 18000,
        },
        {
          field: 'Transatlantic',
          value: 11000,
        },
        {
          field: 'US MEA',
          value: 21000,
        },
      ],
    },
    {
      title: 'Tickets',
      data: [
        {
          field: 'US Domestic',
          value: 25000,
        },
        {
          field: 'Intra Europe',
          value: 14000,
        },
        {
          field: 'Intra Asia',
          value: 18000,
        },
        {
          field: 'Transatlantic',
          value: 11000,
        },
        {
          field: 'US MEA',
          value: 21000,
        },
      ],
    },
    {
      title: 'Savings',
      data: [
        {
          field: 'US Domestic',
          value: 25000,
        },
        {
          field: 'Intra Europe',
          value: 14000,
        },
        {
          field: 'Intra Asia',
          value: 18000,
        },
        {
          field: 'Transatlantic',
          value: 11000,
        },
        {
          field: 'US MEA',
          value: 21000,
        },
      ],
    },
    {
      title: 'Cost Per Mile',
      data: [
        {
          field: 'US Domestic',
          value: 25000,
        },
        {
          field: 'Intra Europe',
          value: 14000,
        },
        {
          field: 'Intra Asia',
          value: 18000,
        },
        {
          field: 'Transatlantic',
          value: 11000,
        },
        {
          field: 'US MEA',
          value: 21000,
        },
      ],
    },
  ],
};
