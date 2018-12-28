//This file contains all data required for the Hotel Spend visualizations

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

const moreLocations = GetRandomCities();

//COMPONENT DATA

export const hotelSpend = {
  title: 'Hotel Spend by Top Countries',
  summary:
    'The country with the highest spend was United States, at $16.1M. It also saw the most savings and most room nights',
  kpis: [
    {
      title: 'United States',
      value: '$16.1M',
      delta: '(-$411k)',
      icon: 'countries_icon',
    },
    {
      title: 'Spain',
      value: '$12.8M',
      delta: '(+$56k)',
      icon: 'countries_icon',
    },
    {
      title: 'United Kingdom',
      value: '$10M',
      delta: '(-$306k)',
      icon: 'countries_icon',
    },
    {
      title: 'China',
      value: '$9.4M',
      delta: '(-$321k)',
      icon: 'countries_icon',
    },
    {
      title: 'France',
      value: '$8.9M',
      delta: '(-$178k)',
      icon: 'countries_icon',
    },
    {
      title: 'Germany',
      value: '$2.2M',
      delta: '(-$41k)',
      icon: 'countries_icon',
    },
  ],
  locations: moreLocations,
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
