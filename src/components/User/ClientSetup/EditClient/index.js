import React from 'react';
import styled from 'styled-components';
import GraphQL from 'components/graphql';
import Navigation from './Navigation';

//views
import General from './General';
import Divisions from './Divisions';
import Users from './Users';
import Applications from './Applications';

import { GET_CLIENTS } from 'components/graphql/query/client';

const Main = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
`;

class EditClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {},
      view: 'General',
    };
  }

  changeView = view => {
    this.setState({
      view,
    });
  };

  renderView(view) {
    switch (view) {
      case 'General':
        return <General />;
      case 'Divisions':
        return <Divisions />;
      case 'Users':
        return <Users />;
      case 'Applications':
        return <Applications />;
      default:
        return <General />;
    }
  }

  render() {
    const { view } = this.state;
    return (
      <GraphQL query={GET_CLIENTS} name="getClients">
        {({ data }) => (
          <>
            <Navigation changeView={this.changeView} selected={view} />
            <Main>{this.renderView(view)}</Main>
          </>
        )}
      </GraphQL>
    );
  }
}

export default EditClient;
