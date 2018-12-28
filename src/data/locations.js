import cities from 'cities.json';



const findCity = (cityName, countryCode) => {
  const city = cities.find(
    location => location.name === cityName && location.country === countryCode
  );
  return {
    latitude: city.lat,
    longitude: city.lng
  };
};

export const locations = [
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
  }
];

const GetRandomCities = () => {
  const randoms = [];
  let i;
  for (i = 0; i < 10; i++) {
    randoms.push(cities[Math.floor(Math.random() * cities.length)])
  }

  return randoms;

}

export const moreLocations = GetRandomCities();



