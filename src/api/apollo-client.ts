import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const isClient = typeof window !== 'undefined';

const wsLink = isClient
  ? new GraphQLWsLink(
      createClient({
        url: `wss://${process.env.GRAPHQL_ENGINE_URL}`,
        connectionParams: {
          headers: {
            'x-hasura-admin-secret': process.env.ADMIN_SECRET,
          },
        },
      })
    )
  : null;

const httpLink = new HttpLink({
  uri: `https://${process.env.GRAPHQL_ENGINE_URL}`,
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': process.env.ADMIN_SECRET,
  },
});

const splitLink =
  isClient && wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
