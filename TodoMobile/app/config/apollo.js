import ApolloClient, {InMemoryCache, ApolloLink} from "apollo-boost";

const getApolloClient = () => {
  const cache = new InMemoryCache()

  return new ApolloClient({
    uri: `http://localhost:4000`,
    cache,
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log('ERROR GRAPHQL', graphQLErrors);
      }
      if (networkError) {
        console.log('NETWORK ERROR', graphQLErrors);
      }
    },
  });
}
export default getApolloClient()