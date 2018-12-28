//This file contains all data required for the Hotel Summary visualizations

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

export const hotelSummary = {
  title: 'Hotel Summary',
  summary:
    '2017 was a busy year. Your company used 132k room nights across 19 countries. Deal makers comprised of the most spend and saved the most.',
  kpis: [
    {
      title: 'Spend',
      value: '$52.4M',
      delta: '($-1.2m)',
      icon: 'spend_icon',
    },
    {
      title: 'Room Nights',
      value: '132k',
      delta: '(+4.1k)',
      icon: 'rooms_icon',
    },
    {
      title: 'Cities Visited',
      value: '27',
      delta: '(+2)',
      icon: 'cities_icon',
    },
    {
      title: 'Hotels Stayed',
      value: '133',
      delta: '(+14)',
      icon: 'hotels_icon',
    },
    {
      title: 'Savings',
      value: '$64k',
      delta: '(+4.9k)',
      icon: 'savings_icon',
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
