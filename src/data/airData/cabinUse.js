//COMPONENT DATA

export const cabinUse = {
  title: 'Cabin Use',
  summary:
    'The top cabin, across all personas in 2018, was Premium Economy at $428,800 (670 tickets) and $48,800 in savings. This was the largest increase from last year at 13%.',

  airlines: [
    {
      title: 'Spend',
      icon: 'spend_icon',
      total: 908852,
      categories: [
        {
          name: 'First Class',
          value: 176690,
          currency: '$176,690',
          color: '#8DC6e7',
        },
        {
          name: 'Business',
          value: 360960,
          currency: '$360,960',
          color: '#468ab2',
        },
        {
          name: 'Premium Economy',
          value: 185601,
          currency: '$185,601',
          color: '#085887',
        },
        {
          name: 'Economy',
          value: 185601,
          currency: '$185,601',
          color: '#032f56',
        },
      ],
    },
    {
      title: 'Tickets',
      icon: 'tickets_icon',
      total: 2616,
      categories: [
        {
          name: 'First Class',
          value: 403,
          color: '#8DC6e7',
        },
        {
          name: 'Business',
          value: 400,
          color: '#468ab2',
        },
        {
          name: 'Premium Economy',
          value: 843,
          color: '#085887',
        },
        {
          name: 'Economy',
          value: 970,
          color: '#032f56',
        },
      ],
    },
    {
      title: 'Savings',
      icon: 'savings_icon',
      total: 108160,
      categories: [
        {
          name: 'First Class',
          value: 19560,
          currency: '$19,560',
          delta: '($0.5k)',
          color: '#8DC6e7',
        },
        {
          name: 'Business',
          value: 48000,
          currency: '$48,000',
          delta: '($3.2k)',
          color: '#468ab2',
        },
        {
          name: 'Premium Economy',
          value: 15480,
          currency: '$15,480',
          delta: '($1.2k)',
          color: '#085887',
        },
        {
          name: 'Economy',
          value: 25120,
          currency: '$25,120',
          delta: '($1.4k)',
          color: '#032f56',
        },
      ],
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
