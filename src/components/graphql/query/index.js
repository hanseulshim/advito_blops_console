import gql from 'graphql-tag';

export * from './executive';
export * from './travelManager';
export * from './category';
export * from './client';
export * from './dashboard';
export * from './division';
export * from './portal';
export * from './riskArea';
export * from './story';
export * from './user';
export * from './login';

export const GET_QUARTER_FILTER_LIST = gql`
  query {
    quarterFilterList {
      id
      value
    }
  }
`;
