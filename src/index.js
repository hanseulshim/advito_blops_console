import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import * as am4core from '@amcharts/amcharts4/core';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';

import { getToken } from './components/graphql/helper';

am4core.options.commercialLicense = true;

const client = new ApolloClient({
  // uri: 'https://kwsccxx9c3.execute-api.us-east-2.amazonaws.com/beta/graphql',
  // uri: 'https://90nseke0l0.execute-api.us-east-2.amazonaws.com/alpha/graphql',
  // uri: 'https://x162060eb4.execute-api.us-east-2.amazonaws.com/dev/graphql',
  uri: 'http://localhost:8080/graphql',
  clientState: {
    defaults,
    resolvers,
  },
  request: operation => {
    const sessiontoken = getToken();
    if (sessiontoken) {
      operation.setContext({
        headers: {
          sessiontoken,
        },
      });
    }
  },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ extensions, message }) => {
        if (extensions.code === 'UNAUTHENTICATED' || message === 'No session found') {
          localStorage.removeItem('advito-blops-user');
          window.location.reload();
        }
      });
    }
  },
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
