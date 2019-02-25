import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

//views
import General from './General';
import Divisions from './Divisions';
import Users from './Users';
import Applications from './Applications';

const Main = styled.div`
  padding-top: 4em;
  padding-bottom: 3em;
`;

class EditClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'General',
    };
  }

  componentWillMount() {
    this.setState({
      selectedClient: this.props.location.state.client,
    });
  }

  render() {
    const { selectedClient } = this.state;
    return (
      <>
        <Navigation selectedClient={selectedClient} />
        <Main>
          <Switch>
            <Route
              path={`/client-setup/${selectedClient.clientName}/general`}
              exact
              component={General}
            />
            <Route
              path={`/client-setup/${selectedClient.clientName}/divisions`}
              component={Divisions}
            />
            <Route path={`/client-setup/${selectedClient.clientName}/users`} component={Users} />
            <Route
              path={`/client-setup/${selectedClient.clientName}/applications`}
              component={Applications}
            />
          </Switch>
        </Main>
      </>
    );
  }
}

export default EditClient;
