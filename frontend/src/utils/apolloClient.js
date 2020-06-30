import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import settings from "../settings";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: `${settings.APP_BASE_URL}/graphql`,
});

const client = new ApolloClient({
    cache,
    link,
});

export default client;
