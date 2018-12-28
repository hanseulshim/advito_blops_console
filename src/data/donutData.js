export default {
  routes: [
    {
      category: 'Transpacific',
      value: 27,
      prop: 'routes',
      nextProp: 'countries',
    },
    {
      category: 'Intercontinental',
      value: 20,
      prop: 'routes',
    },
    {
      category: 'Domestic',
      value: 18,
      prop: 'routes',
    },
    {
      category: 'Intra Europe',
      value: 11,
      prop: 'routes',
    },
    {
      category: 'Regional',
      value: 11,
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
    }
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
      nextProp: 'airports'
    },
    {
      category: 'United Arab Emirates',
      value: 32,
      prop: 'countries',
    }
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
    }
  ]
};
