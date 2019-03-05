import gql from 'graphql-tag';

export const GET_RISK_AREA_DETAIL = gql`
  query($id: Int!) {
    riskAreaDetail(id: $id) {
      id
      locationList {
        title
        value
        percent
        latitude
        longitude
        hover {
          fieldList {
            name
            value
          }
          comments
        }
      }
      comments
    }
  }
`;
