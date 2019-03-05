import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import { GET_SELECTED_CLIENT } from 'graphql/queries';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'react-apollo';

//route components
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
    this.state = {};
  }

  async componentDidMount() {
    const { client } = this.props;

    const { data } = await client.query({
      query: GET_SELECTED_CLIENT,
    });

    if (!data.selectedClient.clientName) {
      this.props.history.push('/client-setup');
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <Main>
          <Switch>
            <Route path={`/client-setup/general`} component={General} />
            <Route path={`/client-setup/divisions`} component={Divisions} />
            <Route path={`/client-setup/users`} component={Users} />
            <Route path={`/client-setup/applications`} component={Applications} />
          </Switch>
        </Main>
      </>
    );
  }
}

export default compose(
  withApollo,
  withRouter
)(EditClient);
