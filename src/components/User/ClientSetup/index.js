import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SelectClient from './SelectClient'
import EditClient from './EditClient'

//project imports

class ClientSetup extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <Switch>
          <Route path={`/client-setup`} exact component={SelectClient} />
          <Route path={`/client-setup/:tab`} component={EditClient} />
        </Switch>
      </>
    )
  }
}

export default ClientSetup
