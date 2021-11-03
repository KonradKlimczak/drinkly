import { ReactNode } from 'react';
import { ApolloClient, ApolloProvider as ApolloProviderLib, HttpLink, InMemoryCache } from '@apollo/client';

const link = new HttpLink({ uri: 'https://bartender-23nhbsprkq-lm.a.run.app/graphql' });

const APOLLO_CLIENT = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

type ApolloProviderProps = {
  children: ReactNode;
};

export const ApolloProvider = (props: ApolloProviderProps) => {
  return <ApolloProviderLib client={APOLLO_CLIENT}>{props.children}</ApolloProviderLib>;
};
