export const routeTypes = {
  title: 'Airline Tickets by Route Types',
  context: 'routes',
  summary:
    'Us Domestic was the most frequently flown route type, accounting for 27% of the total tickets purchased in 2018. This was a 2% increase over 2017',
  routes: [
    {
      category: 'US Domestic',
      value: 18,
      prop: 'routes',
    },
    {
      category: 'Transpacific',
      value: 27,
      prop: 'routes',
      nextProp: 'countries',
    },
    {
      category: 'Intra Europe',
      value: 11,
      prop: 'routes',
    },
    {
      category: 'US MEA',
      value: 20,
      prop: 'routes',
    },
    {
      category: 'Intra Asia',
      value: 8,
      prop: 'routes',
    },
    {
      category: 'Transatlantic',
      value: 5,
      prop: 'routes',
    },
  ],
  countries: [
    {
      category: 'United Kingdom',
      value: 21,
      prop: 'countries',
    },
    {
      category: 'Norway',
      value: 18,
      prop: 'countries',
    },
    {
      category: 'Germany',
      value: 10,
      prop: 'countries',
    },
    {
      category: 'France',
      value: 11,
      prop: 'countries',
    },
    {
      category: 'Spain',
      value: 5,
      prop: 'countries',
    },
    {
      category: 'United States',
      value: 3,
      prop: 'countries',
      nextProp: 'airports',
    },
    {
      category: 'United Arab Emirates',
      value: 32,
      prop: 'countries',
    },
  ],
  airports: [
    {
      category: 'ATL',
      value: 22,
      prop: 'airports',
    },
    {
      category: 'ORD',
      value: 18,
      prop: 'airports',
    },
    {
      category: 'JFK',
      value: 11,
      prop: 'airports',
    },
    {
      category: 'LGA',
      value: 11,
      prop: 'airports',
    },
    {
      category: 'DFW',
      value: 7,
      prop: 'airports',
    },
    {
      category: 'DIA',
      value: 4,
      prop: 'airports',
    },
    {
      category: 'LAX',
      value: 27,
      prop: 'airports',
    },
  ],
};
