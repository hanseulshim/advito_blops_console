//This file contains all data required for Traffic Lane Overview visualization

//CITY LAT LONG DATA
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

export const trafficLaneOverview = {
  title: 'Traffic Lane Overview',
  summary:
    'The traffic lane with the most tickets was US Domestic.It was also the cheapest per mile and saved the most. The least efficient traffic lane was US MEA.',
  kpis: [
    {
      title: 'US Domestic',
      value: '$126k',
      delta: '(-$1.5k)',
      icon: 'spend_icon',
    },
    {
      title: 'Intra Europe',
      value: '$101k',
      delta: '(+$8.2k)',
      icon: 'spend_icon',
    },
    {
      title: 'Intra Asia',
      value: '$98.4k',
      delta: '(+12.2k)',
      icon: 'spend_icon',
    },
    {
      title: 'Transatlantic',
      value: '$92.6k',
      delta: '(+$1.9k)',
      icon: 'spend_icon',
    },
    {
      title: 'Transpacific',
      value: '$60.9k',
      delta: '(+$4.1k)',
      icon: 'spend_icon',
    },
    {
      title: 'US MEA',
      value: '$44k',
      delta: '(+$2.2k)',
      icon: 'spend_icon',
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
