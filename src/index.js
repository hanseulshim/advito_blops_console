import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  // uri: 'https://hs33x2xkgh.execute-api.us-east-2.amazonaws.com/dev/graphql',
  uri: 'https://n3t62ms0i5.execute-api.us-east-2.amazonaws.com/test2/graphql',
  // uri: 'http://localhost:4000/',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
